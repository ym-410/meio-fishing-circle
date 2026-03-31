import { createHmac, timingSafeEqual } from "crypto";

const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN!;
const channelSecret = process.env.LINE_CHANNEL_SECRET!;
const adminUserId = process.env.LINE_ADMIN_USER_ID!;

function verifySignature(body: string, signature: string | null) {
  if (!signature) return false;

  const digest = createHmac("sha256", channelSecret)
    .update(body)
    .digest("base64");

  const a = Buffer.from(digest);
  const b = Buffer.from(signature);

  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

async function pushMessage(to: string, text: string) {
  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${channelAccessToken}`,
    },
    body: JSON.stringify({
      to,
      messages: [
        {
          type: "text",
          text,
        },
      ],
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`LINE push failed: ${res.status} ${errorText}`);
  }
}

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-line-signature");

  const isValid = verifySignature(rawBody, signature);
  if (!isValid) {
    return new Response("Invalid signature", { status: 401 });
  }

  const body = JSON.parse(rawBody);
  const events = body.events ?? [];

  for (const event of events) {
    if (event.type === "message" && event.message?.type === "text") {
      const senderUserId = event.source?.userId ?? "unknown";
      const text = event.message.text ?? "";

      // 管理者自身の発言は通知しない
      if (senderUserId === adminUserId) continue;

      await pushMessage(
        adminUserId,
        `【公式LINEに新着】\n送信者: ${senderUserId}\n内容: ${text}`
      );
    }

    if (event.type === "follow") {
      const senderUserId = event.source?.userId ?? "unknown";

      if (senderUserId === adminUserId) continue;

      await pushMessage(
        adminUserId,
        `【新規友だち追加】\nuserId: ${senderUserId}`
      );
    }
  }

  return new Response("OK", { status: 200 });
}
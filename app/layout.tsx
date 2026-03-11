import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  preload: true,
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "名桜大学フィッシングサークル",
  description: "沖縄の海で、釣りを通じて最高の大学生活を。初心者大歓迎のフィッシングサークルです。",
  keywords: ["釣り", "サークル", "沖縄", "大学", "フィッシング"],
  openGraph: {
    title: "名桜大学フィッシングサークル",
    description: "沖縄の海で、釣りを通じて最高の大学生活を。初心者大歓迎！",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${zenOldMincho.variable} antialiased font-[family-name:var(--font-noto-sans-jp)]`}
      >
        {children}
      </body>
    </html>
  );
}

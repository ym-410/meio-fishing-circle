import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: 'swap',
  preload: true,
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: 'swap',
  preload: true,
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
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} ${zenOldMincho.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

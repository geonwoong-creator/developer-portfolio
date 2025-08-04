import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "WMT.AI - 차세대 AI 웹개발자 | 3배 빠른 개발, 완벽한 품질",
  description: "AI 기술을 활용한 혁신적인 웹 개발 서비스. Next.js, React 전문가가 병원, 법무법인, 기업 홈페이지를 3배 빠른 속도로 제작합니다. 무료 상담 가능.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  manifest: "/manifest.json",
  keywords: ["AI 웹개발", "Next.js 개발", "React 개발", "홈페이지 제작", "병원 홈페이지", "법무법인 홈페이지", "포트폴리오 사이트", "웹사이트 개발"],
  authors: [{ name: "WMT.AI" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/layouts/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MathZone",
  description: "A platform for learning and practicing math",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-sky-200 to-sky-300 h-full min-h-screen `}
      >
        <Header />
        <main>
          {children}
        </main>
          
      </body>
    </html>
  );
}

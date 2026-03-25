import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Insta-RealEstate | Prime Property Marketing Automated",
  description: "Turn any luxury listing URL into a high-end Instagram carousel package in 30 seconds. Designed by code for elite real estate professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ background: '#0a0a0a', color: '#ffffff' }}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

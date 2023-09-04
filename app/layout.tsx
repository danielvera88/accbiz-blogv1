import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Tips",
  description: "Accounting Biz Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="mFK-GwrttFinwCmMSY1uZTxjGmWeZa6hvIfOpVI53tM" />
      </head>
      <body
        className={`${inter.className} bg-[#f0f0f0] text-black h-full`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

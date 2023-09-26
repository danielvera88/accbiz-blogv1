import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.accountingbiz.ai/"),
  title: {
    default: "Accounting Biz Blog",
    template: `%s | Accounting Biz Blog`,
  },
  description:
    " Accounting Biz supports businesses with Accounting services, Bookkeeping, Payroll, and Taxes. Tips from the professionals.We offer tips for small or large businesses and we are always posting new tips to help entrepreneurs.",
  verification: {
    google:
      "google-site-verification=mFK-GwrttFinwCmMSY1uZTxjGmWeZa6hvIfOpVI53tM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="mFK-GwrttFinwCmMSY1uZTxjGmWeZa6hvIfOpVI53tM"
        />
      </head>
      <body className={`${inter.className} bg-[#f0f0f0] text-black h-full`}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

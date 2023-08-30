import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import NextTopLoader from "nextjs-toploader";

const fonte = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roltec rolamentos",
  description: "Rolamentos e correias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="images/icon.ico" sizes="any" />
      </head>

      <body className={fonte.className}>

        <ModalProvider />
        <ToastProvider />

        <Navbar />

        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

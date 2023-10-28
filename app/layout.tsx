import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { Suspense } from "react";
import LoadingSkeleton from "@/components/ui/loading-skeleton";

const fonte = Roboto({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Roltec rolamentos, correis e rodizios",
  description:
    "Sua loja fornecedora de rolamentos de todos os tipos, correias transportadoras e rodizios industriais. Os melhores preços você encontra aqui!",
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
        <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

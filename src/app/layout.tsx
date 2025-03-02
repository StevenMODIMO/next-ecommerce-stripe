import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Nunito } from "next/font/google";
import ProgressBarProvider from "@/components/ProgressBarProvider";

export const metadata: Metadata = {
  title: "Quick Cart",
  description: "Nextjs ecommerce web app + Stripejs payment gateway.",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
  productModal,
}: Readonly<{
  children: React.ReactNode;
  productModal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-white`}>
        <Header />
        <div className="pt-[60px]">
          <ProgressBarProvider>
            {children}
            {productModal}
          </ProgressBarProvider>
        </div>
      </body>
    </html>
  );
}

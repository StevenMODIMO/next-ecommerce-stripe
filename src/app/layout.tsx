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
  cartModal,
}: Readonly<{
  children: React.ReactNode;
  cartModal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <Header />
        <div className="mx-4 h-screen pt-16">
          <ProgressBarProvider>
            {children}
            {cartModal}
          </ProgressBarProvider>
        </div>
      </body>
    </html>
  );
}

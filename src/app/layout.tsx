import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Nunito, Inter } from "next/font/google";
import ProgressBarProvider from "@/components/ProgressBarProvider";

export const metadata: Metadata = {
  title: "Quick Cart",
  description: "Nextjs ecommerce web app + Stripejs payment gateway.",
};

const inter = Inter({ subsets: ["latin", "latin-ext", "vietnamese"] });

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
  cart,
}: Readonly<{
  children: React.ReactNode;
  cart: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <Header />
        <div className="mx-4 h-screen pt-16">
          <ProgressBarProvider>
            {children}
            {cart}
          </ProgressBarProvider>
        </div>
      </body>
    </html>
  );
}

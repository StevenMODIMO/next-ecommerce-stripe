import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Nunito } from "next/font/google";
import ProgressBarProvider from "@/components/ProgressBarProvider";
import SessionWrapper from "@/components/auth/SessionProvider";

export const metadata: Metadata = {
  title: "Quick Cart",
  description: "Next.js eCommerce web app + Stripe.js payment gateway.",
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
      <body className={`${nunito.className} bg-gradient-to-br from-gray-50 to-orange-50`}>
        <SessionWrapper>
          <Header />
          <div className="pt-[60px]">
            <ProgressBarProvider>
              {children}
              {productModal}
            </ProgressBarProvider>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}

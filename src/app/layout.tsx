import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Quick Cart",
  description: "shopping cart + payment intergration with stripe.",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} mx-4 my-4 sm:mx-10 md:mx-16 lg:mx-28`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

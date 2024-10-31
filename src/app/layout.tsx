import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quick Cart",
  description: "shopping cart + payment intergration with stripe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  );
}

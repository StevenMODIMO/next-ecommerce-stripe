import type { Metadata } from "next";

import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Get started",
  description: "Account creation for new users",
};

export default function Cart() {
  return (
    <main>
      <header>
        <p>Get started page</p>
      </header>
      <Footer />
    </main>
  );
}

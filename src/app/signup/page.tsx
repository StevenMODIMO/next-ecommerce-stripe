import type { Metadata } from "next";
import Signup from "@/components/auth/Signup"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Get started",
  description: "Account creation for new users",
};

export default function Cart() {
  return (
    <main className="w-full">
      <Signup />
      <Footer />
    </main>
  );
}

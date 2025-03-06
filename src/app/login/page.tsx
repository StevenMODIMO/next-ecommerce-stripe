import type { Metadata } from "next";
import Login from "@/components/auth/Login";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to continue for existing users",
};

export default function Cart() {
  return (
    <main>
      <Login />
      <Footer />
    </main>
  );
}

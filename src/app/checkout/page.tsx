import type { Metadata } from "next";
import CheckoutWrapper from "@/components/CheckoutForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function Checkout() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12">
        <CheckoutWrapper />
      </div>
      <Footer />
    </div>
  );
}

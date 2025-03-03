import type { Metadata } from "next";
import CheckoutProducts from "@/components/CheckoutProducts";
import CheckoutWrapper from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function Checkout() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <CheckoutProducts />
      <CheckoutWrapper />
    </div>
  );
}

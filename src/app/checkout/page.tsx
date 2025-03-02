import type { Metadata } from "next";
import CheckoutProducts from "@/components/CheckoutProducts";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function Checkout() {
  return (
    <div>
      <CheckoutProducts />
    </div>
  );
}


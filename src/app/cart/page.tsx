import type { Metadata } from "next";
import CartProducts from "@/components/CartProducts";

export const metadata: Metadata = {
  title: "My Cart",
};

export default function Cart() {
  return (
    <main>
      <header className="text-2xl p-2 font-medium text-gray-800">
        <p>Cart View</p>
      </header>
      <CartProducts />
    </main>
  );
}

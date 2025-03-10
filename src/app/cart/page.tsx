import type { Metadata } from "next";
import CartProducts from "@/components/CartProducts";
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "My Cart",
};

export default function Cart() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-12 md:shadow-lg md:rounded md:max-w-5xl">
      <header className="text-2xl p-2 text-center font-medium text-gray-800">
        <p>Cart View</p>
      </header>
      <CartProducts />
      <Footer />
    </main>
  );
}

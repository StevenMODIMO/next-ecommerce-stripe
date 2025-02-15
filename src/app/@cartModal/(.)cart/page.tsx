import type { Metadata } from "next";
import Modal from "@/components/Modal";

export const metadata: Metadata = {
  title: "My Cart",
  description: "User shopping cart.",
};

export default function Cart() {
  return (
    <Modal>
      <main>
        <header className="text-center p-2 font-semibold text-xl">
          <p>Cart Modal</p>
        </header>
      </main>
    </Modal>
  );
}

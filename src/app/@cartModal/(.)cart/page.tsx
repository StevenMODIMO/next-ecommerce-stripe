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
        <header>
          <p>Cart Modal</p>
        </header>
      </main>
    </Modal>
  );
}

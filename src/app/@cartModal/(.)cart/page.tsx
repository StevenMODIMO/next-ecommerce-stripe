import Modal from "@/components/Modal";
import CartProducts from "@/components/CartProducts";

export default function Cart() {
  return (
    <Modal>
      <main>
        <header className="text-center p-2 font-semibold text-xl">
          <p>Cart Modal</p>
        </header>
        <CartProducts />
      </main>
    </Modal>
  );
}

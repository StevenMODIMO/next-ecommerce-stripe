import Modal from "@/components/Modal";
import CartProducts from "@/components/CartProducts";

export default function Cart() {
  return (
    <Modal>
      <main>
        <header className="text-2xl p-2 font-medium text-gray-800">
          <p>Cart View</p>
        </header>
        <CartProducts />
      </main>
    </Modal>
  );
}

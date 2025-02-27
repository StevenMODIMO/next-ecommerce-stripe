"use client";

export default function AddToCart({ product_id }: { product_id: string }) {
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (!existingCart.includes(product_id)) {
      const updatedCart = [...existingCart, product_id];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };
  return (
    <div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

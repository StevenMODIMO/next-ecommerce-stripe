"use client";

interface CartProps {
  product_id: string;
  product_name: string;
  product_image: string;
}

export default function AddToCart({
  product_id,
  product_name,
  product_image,
}: CartProps) {
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (!existingCart.includes(product_id)) {
      const updatedCart = [
        ...existingCart,
        product_id,
        product_name,
        product_image,
      ];
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

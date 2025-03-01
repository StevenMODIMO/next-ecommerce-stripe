"use client";

interface CartProps {
  product_id: string;
  product_name: string;
  product_image: string;
  price: string
}

export default function AddToCart({
  product_id,
  product_name,
  product_image,
  price
}: CartProps) {
  const handleAddToCart = () => {
    const existingCart: CartProps[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const isProductInCart = existingCart.some((item) => item.product_id === product_id);

    if (!isProductInCart) {
      const updatedCart = [
        ...existingCart,
        { product_id, product_name, product_image, price }
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

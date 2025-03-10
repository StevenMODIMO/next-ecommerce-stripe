"use client";
import { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";

interface CartProps {
  product_id: string;
  product_name: string;
  product_image: string;
  price: string;
}

export default function AddToCart({
  product_id,
  product_name,
  product_image,
  price,
}: CartProps) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const existingCart: CartProps[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    setIsInCart(existingCart.some((item) => item.product_id === product_id));

    const handleCartUpdate = () => {
      const updatedCart: CartProps[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
      setIsInCart(updatedCart.some((item) => item.product_id === product_id));
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [product_id]);

  const handleAddToCart = () => {
    const existingCart: CartProps[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    if (!isInCart) {
      const updatedCart = [
        ...existingCart,
        { product_id, product_name, product_image, price },
      ];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("cartUpdated"));
      setIsInCart(true);
    }
  };

  return (
    <div>
      <button
        className={`flex items-center justify-center gap-1 p-2 rounded border-2 
          ${
            isInCart
              ? "bg-[#E27210] text-white hover:bg-none hover:border-2 hover:border-[#E27210] hover:text-gray-800 transition-all duration-100 ease-in-out"
              : "border-[#E27210] text-gray-800 hover:border-none hover:bg-[#E27210] hover:text-white transition-all duration-100 ease-in-out"
          }
        `}
        onClick={handleAddToCart}
      >
        <MdAddShoppingCart
          className={`${isInCart ? "text-white" : "text-[#E27210]"}`}
        />
        <span>{isInCart ? "Added to cart" : "Add to cart"}</span>
      </button>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import {
  MdDeleteOutline,
  MdShoppingCart,
} from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import Link from "next/link";

interface ProductProps {
  product_id: string;
  product_name: string;
  product_image: string;
  price: string;
}

export default function CartProducts() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const getCartProducts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setProducts(cart);
    };
    getCartProducts();
  }, []);

  const handleDelete = (id: string) => {
    const updatedCart = products.filter((product) => product.product_id !== id);
    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div>
      {products.length === 0 ? (
        <section className="w-full">
          <header className="flex flex-col items-center gap-3 justify-center my-10">
            <div className="bg-gray-100 rounded-full flex items-center justify-center p-6">
              <MdShoppingCart className="h-32 w-32 text-[#E27210]" />
            </div>
            <p className="text-gray-600 font-medium">Your cart is empty</p>
          </header>
          <Link
            href="/products"
            className="w-fit p-2 mx-auto my-4 rounded bg-[#E27210] text-white cursor-pointer"
          >
            Continue shopping
          </Link>
        </section>
      ) : (
        <section className="flex flex-col gap-3 py-3 px-2 lg:px-4 lg:py-6">
          {products.map(
            ({ product_id, product_name, product_image, price }) => {
              return (
                <div
                  key={product_id}
                  className="flex items-center justify-between p-2 bg-gray-100 rounded"
                >
                  <div className="flex gap-2 items-center">
                    <CgMenuGridO className="text-xl text-[#E27210]" />
                    <section className="flex items-end gap-2">
                      <img
                        src={product_image}
                        alt={product_name}
                        className="w-20 h-20 lg:w-24 lg:h-24 lg:rounded-full"
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-gray-800 text-sm font-medium sm:text-lg md:text-xl lg:text-2xl">
                          {product_name}
                        </p>
                        <p className="text-gray-700 text-xs font-medium sm:text-sm lg:text-lg">
                          Price: ${price}
                        </p>
                      </div>
                    </section>
                  </div>
                  <div className="p-2 hover:bg-gray-200 cursor-pointer rounded-full">
                    <MdDeleteOutline
                      onClick={() => handleDelete(product_id)}
                      className="text-2xl text-[#E27210] lg:text-3xl"
                    />
                  </div>
                </div>
              );
            }
          )}
          {products.length > 0 && (
            <Link
              href="/checkout"
              className="flex gap-2 items-center w-fit mx-auto my-3 p-2 rounded bg-[#E27210] text-white"
            >
              <span>Checkout</span>
            </Link>
          )}
        </section>
      )}
    </div>
  );
}

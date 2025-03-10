"use client";
import { useState, useEffect } from "react";
import { MdDeleteOutline, MdShoppingCart } from "react-icons/md";
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
    <div className="p-4">
      {products.length === 0 ? (
        <section className="w-full flex flex-col justify-center">
          <header className="flex flex-col items-center gap-3 justify-center my-10">
            <div className="bg-gray-100 rounded-full flex items-center justify-center p-6">
              <MdShoppingCart className="h-32 w-32 text-[#E27210]" />
            </div>
            <p className="text-gray-600 font-medium">Your cart is empty</p>
          </header>
          <button className="w-fit p-2 mx-auto my-4 rounded bg-[#E27210] text-white cursor-pointer">
            <Link href="/products">Continue shopping</Link>
          </button>
        </section>
      ) : (
        <section className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 px-4 py-2">Product</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map(
                ({ product_id, product_name, product_image, price }) => (
                  <tr key={product_id} className="odd:bg-gray-50 even:bg-white">
                    <td className="border border-gray-300 px-4 py-2 flex items-center gap-2">
                      <CgMenuGridO className="text-xl text-[#E27210]" />
                      <img
                        src={product_image}
                        alt={product_name}
                        className="w-12 h-12 lg:w-16 lg:h-16 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">
                      {product_name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-green-500 font-medium">
                      ${price}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(product_id)}
                        className="p-2 hover:bg-gray-200 cursor-pointer rounded-full"
                      >
                        <MdDeleteOutline className="text-2xl text-[#E27210] lg:text-3xl" />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </section>
      )}
      {products.length > 0 && (
        <div className="my-4">
          <form className="flex flex-col gap-1 rounded shadow-lg p-2">
            <header className="text-sm font-medium text-gray-800 border-b border-gray-800">
              <h1>Use discount code</h1>
            </header>
            <input
              placeholder="Enter coupon code"
              className="p-2 rounded outline-none border"
            />
            <button className="border-2 border-[#E27210] p-1 rounded text-gray-800 font-medium">
              Apply
            </button>
          </form>
          <div className="flex justify-end px-6 sm:px-16 lg:py-6 lg:px-28">
            <Link
              href="/checkout"
              className="flex p-2 text-gray-800 rounded border-2 border-[#E27210] hover:bg-[#E27210] hover:text-white"
            >
              <span>Checkout</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

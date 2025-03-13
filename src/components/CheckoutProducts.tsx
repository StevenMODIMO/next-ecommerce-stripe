"use client";
import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

interface Product {
  product_id: string;
  product_name: string;
  product_image: string;
  price: string;
}

export default function CheckoutProducts({
  onProceed,
  loading,
}: {
  onProceed: (subtotal: number) => void;
  loading: boolean;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const prods: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setProducts(prods);

    const initialQuantities = prods.reduce((acc, product) => {
      acc[product.product_id] = 1;
      return acc;
    }, {} as { [key: string]: number });

    setQuantities(initialQuantities);
  }, []);

  const handleDelete = (id: string) => {
    const updatedCart = products.filter((product) => product.product_id !== id);
    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    const updatedQuantities = { ...quantities };
    delete updatedQuantities[id];
    setQuantities(updatedQuantities);
  };

  const handleQuantityChange = (
    id: string,
    operation: "increase" | "decrease"
  ) => {
    setQuantities((prevQuantities) => {
      const newQuantity =
        operation === "increase"
          ? Math.min(prevQuantities[id] + 1, 5)
          : Math.max(prevQuantities[id] - 1, 1);

      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  const subtotal = products.reduce(
    (sum, { product_id, price }) =>
      sum + parseFloat(price) * (quantities[product_id] || 1),
    0
  );

  return (
    <div>
      {" "}
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
        <>
          <section className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="border border-gray-300 px-4 py-2 text-[#E27210]">
                    Thumbnail
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-[#E27210]">
                    Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-[#E27210]">
                    Price
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-[#E27210]">
                    Quantity
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-[#E27210]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map(
                  ({ product_id, product_name, product_image, price }) => {
                    const totalPrice =
                      parseFloat(price) * (quantities[product_id] || 1);
                    return (
                      <tr key={product_id}>
                        <td className="border border-gray-300 flex items-center gap-2">
                          <img
                            src={product_image}
                            alt={product_name}
                            className="w-12 h-12 lg:w-16 lg:h-16 rounded"
                          />
                        </td>
                        <td className="border border-gray-300 font-medium text-gray-800">
                          {product_name}
                        </td>
                        <td className="border border-gray-300 text-green-500 font-medium">
                          ${price}
                        </td>
                        <td className="border border-gray-300 font-medium flex items-center justify-center gap-2">
                          <div
                            onClick={() =>
                              handleQuantityChange(product_id, "decrease")
                            }
                            className="w-fit p-2 rounded-full text-white bg-[#E27210]"
                          >
                            <FaMinus />
                          </div>
                          <div>{quantities[product_id]}</div>
                          <div>
                            <FaPlus
                              onClick={() =>
                                handleQuantityChange(product_id, "increase")
                              }
                              className="w-fit p-2 rounded-full text-white bg-[#E27210]"
                            />
                          </div>
                        </td>
                        <td className="border border-gray-300 text-center">
                          <button
                            onClick={() => handleDelete(product_id)}
                            className="p-2 hover:bg-gray-200 cursor-pointer rounded-full"
                          >
                            <MdDeleteOutline className="text-2xl text-[#E27210] lg:text-3xl" />
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </section>
          <section className="flex justify-between px-2 lg:px-4 py-4 border-t-2 border-gray-300">
            <p className="text-gray-800 text-lg font-bold lg:text-xl">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
            {!loading ? (
              <button
                onClick={() => onProceed(subtotal)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 hover:border-2 hover:border-green-600 transition-all duration-100 ease-in-out"
              >
                Proceed to Payment
              </button>
            ) : (
              <div className="p-2 rounded text-white font-medium bg-green-500 flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full border-4 border-t-transparent h-5 w-5 border-white"></div>
                <div>Processing</div>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

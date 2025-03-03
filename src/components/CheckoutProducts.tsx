"use client";
import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

interface Product {
  product_id: string;
  product_name: string;
  product_image: string;
  price: string;
}

export default function CheckoutProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const getProducts = () => {
      const prods: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
      setProducts(prods);
      // Initialize quantity for each product (default to 1)
      const initialQuantities = prods.reduce((acc, product) => {
        acc[product.product_id] = 1;
        return acc;
      }, {} as { [key: string]: number });
      setQuantities(initialQuantities);
    };
    getProducts();
  }, []);

  const handleDelete = (id: string) => {
    const updatedCart = products.filter((product) => product.product_id !== id);
    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    // Remove quantity tracking for deleted product
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
          ? Math.min(prevQuantities[id] + 1, 5) // Max 5
          : Math.max(prevQuantities[id] - 1, 1); // Min 1

      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  // Calculate subtotal of all products
  const subtotal = products.reduce(
    (sum, { product_id, price }) =>
      sum + parseFloat(price) * (quantities[product_id] || 1),
    0
  );

  return (
    <div>
      <section className="flex flex-col gap-3 py-3 px-2 lg:px-4 lg:py-6">
        {products.map(({ product_id, product_name, product_image, price }) => {
          const totalPrice = parseFloat(price) * (quantities[product_id] || 1);
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
              <section>
                <p>Quantity</p>
                <section className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(product_id, "decrease")}
                    className="w-fit p-2 rounded bg-gray-200"
                  >
                    <FaMinus />
                  </button>

                  <div>{quantities[product_id]}</div>
                  <button
                    onClick={() => handleQuantityChange(product_id, "increase")}
                    className="w-fit p-2 rounded bg-gray-200"
                  >
                    <FaPlus />
                  </button>
                </section>
                <p className="text-gray-700 text-sm font-medium mt-1">
                  Total: ${totalPrice.toFixed(2)}
                </p>
              </section>
              <div className="p-2 hover:bg-gray-200 cursor-pointer rounded-full">
                <MdDeleteOutline
                  onClick={() => handleDelete(product_id)}
                  className="text-2xl text-[#E27210] lg:text-3xl"
                />
              </div>
            </div>
          );
        })}
      </section>
      <section className="flex justify-end px-2 lg:px-4 py-4 border-t-2 border-gray-300">
        <p className="text-gray-900 text-lg font-semibold">
          Subtotal: ${subtotal.toFixed(2)}
        </p>
      </section>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { MdDeleteOutline, MdShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ProductProps {
  product_id: string;
  product_name: string;
  product_image: string;
  price: string;
}

export default function CartProducts() {
  const router = useRouter();
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
          <div
            className="w-fit p-2 mx-auto my-4 rounded bg-[#E27210] text-white cursor-pointer"
            onClick={() => router.back()}
          >
            Continue shopping
          </div>
        </section>
      ) : (
        <section className="flex flex-col gap-3 py-3 px-2">
          {products.map(
            ({ product_id, product_name, product_image, price }) => {
              return (
                <div
                  key={product_id}
                  className="flex items-center justify-between p-2"
                >
                  <section>
                    <img
                      src={product_image}
                      alt={product_name}
                      className="w-24 h-24"
                    />
                    <div>
                      <p>{product_name}</p>
                      <p>{price}</p>
                    </div>
                  </section>
                  <div className="p-2">
                    <MdDeleteOutline
                      onClick={() => handleDelete(product_id)}
                      className="text-[#E27210]"
                    />
                  </div>
                </div>
              );
            }
          )}
        </section>
      )}
    </div>
  );
}

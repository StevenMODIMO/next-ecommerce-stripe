"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Loading from "@/app/loading";
import AddToCart from "./AddToCart";
import Typewriter from "./Typewriter";

interface Product {
  product_id: string;
  product_name: string;
  product_description: string;
  product_category: string;
  price: string;
  quantity: number;
  product_image: string;
  large_image: string;
  create_at: string;
}

export default function Banner() {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("/api/products/?banner=true");
        const data = await response.json();

        if (response.ok) {
          setProduct(data);
        } else {
          console.error("Failed to fetch product:", data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProduct();
  }, []);

  if (!product) {
    return <Loading />;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
      <div className="p-4 rounded-md shadow flex flex-col gap-4 md:flex-row md:items-end">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-1/2 mx-auto"
        >
          <img
            src={product.large_image || product.product_image}
            alt={product.product_name}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <Typewriter />
          <h1 className="text-gray-800 text-2xl font-medium">
            {product.product_name}
          </h1>
          <p className="text-gray-700 font-medium text-base">
            {product.product_description}
          </p>
          <span className="text-green-500 text-base">${product.price}</span>
          <div className="flex gap-2 items-center justify-between text-base">
            <Link
              href={`/products/${product.product_id}`}
              className="bg-gray-800 text-white p-1 rounded font-medium"
            >
              View Product
            </Link>
            <AddToCart
              product_id={product.product_id}
              product_name={product.product_name}
              product_image={product.product_image}
              price={product.price}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

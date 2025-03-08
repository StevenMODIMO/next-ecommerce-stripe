"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Loading from "@/app/loading";

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
    return (
        <Loading />
    );
  }

  return (
    <section className="relative w-full bg-gray-100 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <img
            src={product.large_image || product.product_image}
            alt={product.product_name}
            className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col gap-4"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {product.product_name}
          </h1>
          <p className="text-lg text-gray-600">{product.product_description}</p>
          <span className="text-[#E27210] text-xl font-semibold">
            ${product.price}
          </span>
          <div className="flex gap-4 mt-4">
            <Link
              href={`/products/${product.product_id}`}
              className="bg-[#E27210] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#cf6210] transition"
            >
              View Product
            </Link>

            <button className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
              <FaShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

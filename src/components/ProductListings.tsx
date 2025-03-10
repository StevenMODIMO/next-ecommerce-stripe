"use client";

import { useState, useEffect } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaBinoculars } from "react-icons/fa";
import Loading from "@/app/loading";
import Link from "next/link";// Import framer-motion

interface Product {
  product_id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  product_image: string;
  price: string;
  quantity: string;
}

export default function ProductListings() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const json = await response.json();
        if (response.ok) {
          setProducts(json);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(5);
      }
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % products.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsToShow + products.length) % products.length
    );
  };

  return (
    <div className="w-full min-h-[60vh] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <header>
          <div className="my-2 h-[2px] w-12 rounded-md bg-[#E27210]"></div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500 flex items-center gap-2 lg:text-lg lg:font-semibold">
              <FaBinoculars className="text-[#E27210]" />
              <p>Quick Overview</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevious}
                className="p-1 rounded-full bg-[#E27210] hover:bg-[#c85c0a] transition"
              >
                <MdOutlineArrowBackIos className="text-white" />
              </button>
              <button
                onClick={handleNext}
                className="p-1 rounded-full bg-[#E27210] hover:bg-[#c85c0a] transition"
              >
                <MdOutlineArrowForwardIos className="text-white" />
              </button>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-800 lg:text-2xl">
            Get the most from our categories
          </p>
        </header>
        {products.length === 0 ? (
          <Loading />
        ) : (
          <div className="flex gap-4 overflow-hidden p-2">
            {products
              .slice(currentIndex, currentIndex + itemsToShow)
              .concat(
                products.slice(
                  0,
                  Math.max(0, currentIndex + itemsToShow - products.length)
                )
              )
              .map((product) => (
                <div
                  key={product.product_id}
                  className="bg-white shadow-md rounded flex flex-col items-center w-full p-4 sm:w-[30%] lg:w-[24%]"
                >
                  <Link
                    href={`/products/${product.product_id}`}
                    className="block"
                  >
                    <img
                      src={product.product_image}
                      alt={product.product_name}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-semibold mt-2 text-gray-800">
                      {product.product_name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600">
                      {product.product_category}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-[#E27210]">
                        ${product.price}
                      </p>
                      <p className="text-green-500 text-xs lg:text-sm">
                        ({product.quantity} in stock)
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

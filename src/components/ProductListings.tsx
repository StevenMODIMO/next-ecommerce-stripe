"use client";

interface Products {
  product_id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  product_image: string;
  price: string;
  quantity: string;
}
import Loading from "@/app/loading";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaBinoculars } from "react-icons/fa";

export default function ProductListings() {
  const [products, setProducts] = useState<Products | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();

      if (response.ok) {
        console.log(json);
      } else {
        console.log(json);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <header>
          <div className="my-2 h-[2px] w-12 rounded-md bg-[#E27210]"></div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500 flex items-center gap-2 lg:text-lg lg:font-semibold">
              <FaBinoculars className="text-[#E27210]" />
              <p>Quick Overview</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-[#E27210]">
                <MdOutlineArrowBackIos className="text-white" />
              </div>
              <div className="p-1 rounded-full bg-[#E27210]">
                <MdOutlineArrowForwardIos className="text-white" />
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            Get the most from our categories
          </p>
        </header>
        {/* <Suspense fallback={<Loading />}> */}
        <Loading />
        {/* </Suspense> */}
      </div>
    </div>
  );
}

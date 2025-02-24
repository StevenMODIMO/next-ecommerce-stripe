"use client";
import Link from "next/link";
import { MdCategory } from "react-icons/md";
import { categories } from "@/lib/data";
import { FaCamera, FaBookOpen } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { IoMdWatch } from "react-icons/io";
import { MdChair, MdOutlineCardTravel } from "react-icons/md";
import { IoCarSport, IoGameControllerOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import { GiLoincloth } from "react-icons/gi";

export default function CategoryListings() {
  const categoryColors = [
    "#E27210", // Camera
    "#4A90E2", // Gaming
    "#D81B60", // Fashion
    "#673AB7", // Books
    "#009688", // Travel
    "#795548", // Coffee
    "#607D8B", // Watches
    "#FF5722", // Cars
    "#3F51B5", // Furniture
    "#8BC34A", // TV
  ];

  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <header>
          <div className="my-2 h-[2px] w-12 rounded-md bg-[#E27210]"></div>
          <div className="text-sm text-gray-500 flex items-center gap-2 lg:text-lg lg:font-semibold">
            <MdCategory className="text-[#E27210]" />
            <p>Our Categories</p>
          </div>
          <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
            Browse by Category
          </h1>
        </header>
        <div className="cursor-pointer drop-shadow-xl grid grid-cols-5 sm:grid-cols-5 mt-6 md:grid-cols-10 lg:grid-cols-10 gap-2 lg:gap-3 place-items-center">
          {categories.map(({ id, title }, index) => (
            <Link
              key={id}
              href={`/products/?category=${encodeURIComponent(title.toLowerCase())}`}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-18 md:h-18 lg:w-24 lg:h-24 flex flex-col items-center justify-center shadow rounded-full text-white transition-transform duration-200 ease-in-out hover:scale-110"
              style={{
                backgroundColor: categoryColors[index % categoryColors.length],
              }}
            >
              <div>
                {id === 1 && <FaCamera className="h-8 w-8" />}
                {id === 2 && <IoGameControllerOutline className="h-8 w-8" />}
                {id === 3 && <GiLoincloth className="h-8 w-8" />}
                {id === 4 && <FaBookOpen className="h-8 w-8" />}
                {id === 5 && <MdOutlineCardTravel className="h-8 w-8" />}
                {id === 6 && <FiCoffee className="h-8 w-8" />}
                {id === 7 && <IoMdWatch className="h-8 w-8" />}
                {id === 8 && <IoCarSport className="h-8 w-8" />}
                {id === 9 && <MdChair className="h-8 w-8" />}
                {id === 10 && <PiTelevisionSimpleBold className="h-8 w-8" />}
              </div>
              <p className="font-medium text-[10px] sm:text-xs text-center">{title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { LuNewspaper } from "react-icons/lu";
import { FaHourglass } from "react-icons/fa";

const NewsLetter: React.FC = () => {
  return (
    <div className="px-4 max-w-7xl mx-auto rounded py-16 text-white sm:px-12 lg:px-16">
      <div className="bg-gradient-to-r from-[#e27210] to-[#ff9e49] p-6 rounded shadow-lg flex flex-col gap-6 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <header className="flex flex-col gap-3 lg:w-1/2">
          <div className="flex gap-2 items-center">
            <LuNewspaper className="w-10 h-10" />
            <h1 className="font-medium text-lg">
              Don't Miss Our Latest Trends & Offers
            </h1>
          </div>
          <p className="text-[16px]">
            Register to receive news about offers and discount codes.
          </p>
        </header>
        <form className="flex flex-col gap-2 sm:flex-row sm:w-full lg:w-1/2">
          <input
            type="text"
            className="outline-none p-2 rounded bg-white text-gray-800 w-full sm:w-auto lg:w-96"
            placeholder="Enter your email"
          />
          <button disabled className="bg-white rounded p-2 text-gray-500 font-semibold flex items-center gap-2 justify-center">
            <FaHourglass />
            <span>Subscribe</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

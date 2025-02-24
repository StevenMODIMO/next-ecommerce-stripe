"use client";
import { FaImage } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";

export default function Loading() {
  return (
    <div className="min-h-[60vh] w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 animate-pulse">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...Array(1)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg"
            >
              <FaImage className="h-32 w-full text-gray-200" />
              <div className="flex gap-1 items-center">
                {[...Array(5)].map((_, j) => (
                  <MdStarRate key={j} className="text-xl text-gray-200" />
                ))}
              </div>
              <div className="w-full h-6 rounded bg-gray-200"></div>
              <div className="flex justify-between items-center w-full">
                <div className="w-[30%] h-6 rounded bg-gray-200"></div>
                <div className="w-[30%] h-6 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="hidden sm:flex flex-col gap-2 p-4 bg-gray-100 rounded-lg"
            >
              <FaImage className="h-32 w-full text-gray-200" />
              <div className="flex gap-1 items-center">
                {[...Array(5)].map((_, j) => (
                  <MdStarRate key={j} className="text-xl text-gray-200" />
                ))}
              </div>
              <div className="w-full h-6 rounded bg-gray-200"></div>
              <div className="flex justify-between items-center w-full">
                <div className="w-[30%] h-6 rounded bg-gray-200"></div>
                <div className="w-[30%] h-6 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="hidden lg:flex flex-col gap-2 p-4 bg-gray-100 rounded-lg md:hidden"
            >
              <FaImage className="h-32 w-full text-gray-200" />
              <div className="flex gap-1 items-center">
                {[...Array(5)].map((_, j) => (
                  <MdStarRate key={j} className="text-xl text-gray-200" />
                ))}
              </div>
              <div className="w-full h-6 rounded bg-gray-200"></div>
              <div className="flex justify-between items-center w-full">
                <div className="w-[30%] h-6 rounded bg-gray-200"></div>
                <div className="w-[30%] h-6 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

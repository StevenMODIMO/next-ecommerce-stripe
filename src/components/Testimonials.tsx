"use client";
import { useState } from "react";
import { testimonials } from "@/lib/data";
import image1 from "@/app/assets/user-01.webp";
import image2 from "@/app/assets/user-02.webp";
import image3 from "@/app/assets/user-03.jpg";
import image4 from "@/app/assets/user-04.jpg";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { motion } from "motion/react";

const images = [image1, image2, image3, image4];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Handle next and previous slide
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full py-16 min-h-[60vh] bg-gray-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between mb-6 sm:hidden">
          <header>
          <div className="my-2 h-[2px] w-12 rounded-md bg-[#E27210]"></div>
            <div className="text-sm text-gray-500 flex items-center gap-2 lg:text-lg lg:font-semibold">
              <TbUsersGroup className="text-[#E27210]" />
              <p>Testimonials</p>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              What Our Customers Say
            </h2>
          </header>
          <div className="flex gap-3 items-center">
            <div className="p-1 rounded-full bg-[#E27210]">
              <MdOutlineArrowBackIos
                className="text-white"
                onClick={handlePrev}
              />
            </div>
            <div className="p-1 rounded-full bg-[#E27210]">
              <MdOutlineArrowForwardIos
                className="text-white"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
        <header className="hidden sm:block">
          <div className="my-2 h-[2px] w-12 rounded-md bg-[#E27210]"></div>
          <div className="text-sm text-gray-500 flex items-center gap-2 lg:text-lg lg:font-semibold">
            <TbUsersGroup className="text-[#E27210]" />
            <p>Testimonials</p>
          </div>
          <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
            What Our Customers Say
          </h1>
        </header>
        <div className="mt-6">
          {/* Mobile Slider */}
          <div className="relative overflow-hidden sm:hidden">
            <motion.div
              key={currentIndex} 
              initial={{ x: direction * 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white p-6 rounded flex flex-col items-center text-center"
            >
              <img
                src={images[currentIndex].src}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <p className="text-gray-700 font-medium text-lg mt-2">
                {testimonials[currentIndex].name}
              </p>
              <p className="font-bold text-sm text-[#E27210]">
                {testimonials[currentIndex].title}
              </p>
              <p className="text-gray-600 text-sm mt-3">
                {testimonials[currentIndex].description}
              </p>
            </motion.div>
          </div>

          {/* Tablet & Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ id, name, description, title }, index) => (
              <div key={id} className="bg-white p-6 rounded">
                <header className="flex items-center gap-4">
                  <img
                    src={images[index].src}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-700 font-medium text-lg">{name}</p>
                    <p className="font-bold text-sm text-[#E27210]">
                      {title}
                    </p>
                  </div>
                </header>
                <p className="text-gray-600 text-sm mt-4">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

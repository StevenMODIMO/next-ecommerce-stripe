"use client";
import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface ProductModalProps {
  children: React.ReactNode;
}

export default function ProductModal({ children }: ProductModalProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="fixed h-screen w-screen top-0 bg-black/10 inset-0 z-[100] flex flex-col justify-end items-center"
    >
      <motion.div
        className="bg-white rounded-t-3xl h-[80%] w-full overflow-auto lg:h-[80%] lg:w-[80%]"
        initial={{ y: 1200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <header
          onClick={() => router.back()}
          className="p-2 text-xl text-gray-400 cursor-pointer flex justify-end rotate-90 sm:text-2xl"
        >
          <IoIosArrowBack />
        </header>
        {children}
      </motion.div>
    </div>
  );
}

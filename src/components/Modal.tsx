"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <div
        className="bg-black/10 fixed inset-0 flex justify-end"
        onClick={() => router.back()}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white min-h-screen w-full sm:w-[50%] shadow-lg overflow-hidden"
        >
          <header
            className="w-fit rounded-full p-2 text-xl text-gray-400 cursor-pointer sm:text-2xl"
            onClick={() => router.back()}
          >
            <IoIosArrowBack />
          </header>
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

"use client";

import React from "react";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  return (
    <div className="bg-black/80 h-screen absolute top-0 right-0 w-[50%] p-3">
      <header className="flex justify-end p-2" onClick={() => router.back()}>
        <FaTimes />
      </header>
      {children}
    </div>
  );
}

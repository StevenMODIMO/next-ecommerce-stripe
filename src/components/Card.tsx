"use client";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className="p-2 my-3 shadow w-fit">{children}</div>;
}

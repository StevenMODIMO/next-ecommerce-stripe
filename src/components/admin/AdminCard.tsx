"use client";
import React from "react";

interface AdminCardProps {
  children: React.ReactNode;
}

export default function AdminCard({ children }: AdminCardProps) {
  return <div className="w-fit p-2 rounded-tr rounded-bl border shadow">{children}</div>;
}

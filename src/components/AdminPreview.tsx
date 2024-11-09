"use client";

interface AdminPreviewTypes {
  productName: string;
  price: number;
  file: string;
}

import Image from "next/image";
import Card from "./Card";

export default function AdminPreview({
  productName,
  price,
  file,
}: AdminPreviewTypes) {
  return (
    <Card>
      <main></main>
    </Card>
  );
}

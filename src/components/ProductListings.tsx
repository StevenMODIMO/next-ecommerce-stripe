interface Products {
  product_id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  product_image: string;
  price: string;
  quantity: string;
}
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductListings() {
  const response = await fetch(`${process.env.BASE_URL}/api/products`, {
    cache: "no-store",
  });
  const data = await response.json();

  if (response.status == 404) {
    notFound();
  }

  const products: Products[] = data;
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16"></div>
    </div>
  );
}

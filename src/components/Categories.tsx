"use client";
import Image from "next/image";
import Link from "next/link"
import { useState, useEffect } from "react";

interface ProductTypes {
  _id: string;
  productName: string;
  price: string;
  fileUrl: string;
}

export default function Categories() {
  const [products, setProducts] = useState<ProductTypes[] | []>([]);
  const [category, setCategory] = useState("fashion");

  const getProducts = async (cat: string) => {
    const response = await fetch(
      `http://localhost:3000/api/admin?category=${cat}`
    );

    const json = await response.json();

    if (response.ok) {
      setProducts(json);
    } else {
      console.log(json.error);
    }
  };

  useEffect(() => {
    getProducts(category);
  }, [category]);

  const categories = [
    "fashion",
    "electronics",
    "home-living",
    "transport",
    "cosmetics",
  ];

  const formatCategoryText = (text: string) => {
    if (text === "home-living") {
      text = "home&living";
    }
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
      <div className="flex gap-4 mt-4">
        {categories.map((cat) => (
          <button
            className="bg-[#E27210] p-2 rounded-md text-xl"
            key={cat}
            onClick={() => setCategory(cat)}
          >
            {formatCategoryText(cat)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {products.map(({ _id, productName, price, fileUrl }) => (
          <div className="p-2" key={_id}>
            <Link href={_id}>
              <section className="relative w-full h-36 bg-gray-100 rounded-md">
                <Image src={fileUrl} alt={productName} fill={true} />
              </section>
              <p>{productName}</p>
              <p className="text-[#E27210] font-semibold">${price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

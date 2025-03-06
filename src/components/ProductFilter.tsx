"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { GoSidebarCollapse } from "react-icons/go";
import Link from "next/link";

interface Category {
  id: number;
  title: string;
  value: string;
}

const categories: Category[] = [
  { id: 1, title: "Camera", value: "camera" },
  { id: 2, title: "Gaming", value: "gaming" },
  { id: 3, title: "Fashion", value: "fashion" },
  { id: 4, title: "Books", value: "books" },
  { id: 5, title: "Travel", value: "travel" },
  { id: 6, title: "Grocery", value: "grocery" },
  { id: 7, title: "Watches", value: "watches" },
  { id: 8, title: "Automotive", value: "automotive" },
  { id: 9, title: "Furniture", value: "furniture" },
  { id: 10, title: "Television", value: "television" },
];

export default function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);

  const selectedCategories = new Set(searchParams.getAll("category"));

  const handleCategoryChange = (category: string) => {
    const updatedCategories = new Set(selectedCategories);

    if (updatedCategories.has(category)) {
      updatedCategories.delete(category);
    } else {
      updatedCategories.add(category);
    }

    const params = new URLSearchParams();
    updatedCategories.forEach((cat) => params.append("category", cat));

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = selectedCategories.size
        ? `?${Array.from(selectedCategories)
            .map((cat) => `category=${cat}`)
            .join("&")}`
        : "";

      const res = await fetch(`/api/products${query}`);
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <section className="flex flex-col gap-1 shadow rounded-md md:h-fit md:w-[30%] lg:w-[20%]">
        <header className="flex justify-between items-center p-2">
          <h2 className="font-medium text-gray-800">Filters:</h2>
          <GoSidebarCollapse
            className="text-2xl font-bold text-[#E27210] rotate-90"
            onClick={() => setShow(!show)}
          />
        </header>
        <div
          className={`${
            show
              ? "flex flex-col gap-1 p-2"
              : "hidden md:flex md:flex-col md:gap-1 md:p-2"
          }`}
        >
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                className="accent-[#E27210]"
                type="checkbox"
                checked={selectedCategories.has(category.value)}
                onChange={() => handleCategoryChange(category.value)}
              />
              <span className="text-sm text-gray-600 sm:text-base">
                {category.title}
              </span>
            </label>
          ))}
        </div>
      </section>
      <div className="md:w-[70%]">
        <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {products.length > 0 ? (
            products.map((product: any) => (
              <Link
                href={`/products/${product.product_id}`}
                key={product.product_id}
              >
                <img src={product.product_image} />
                <p>{product.product_name}</p>
                <div>
                  <p>${product.price}</p>
                  <p>({product.quantity} in stock)</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

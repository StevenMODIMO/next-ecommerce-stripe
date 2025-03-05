"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { GoSidebarCollapse } from "react-icons/go";

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
    <div className="sm:grid sm:grid-cols-[250px_auto] gap-6">
      {/* Filter Section */}
      <section className="rounded border p-4 bg-white shadow">
        <header className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-800">Filters:</h2>
          <GoSidebarCollapse
            className="rotate-90 text-[#E27210] text-lg cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </header>
        <div className={`${show ? "flex flex-col gap-3 h-fit" : "hidden"}`}>
          {categories.map((category) => (
            <label key={category.id} className="flex items-center gap-2">
              <input
                className="accent-[#E27210]"
                type="checkbox"
                checked={selectedCategories.has(category.value)}
                onChange={() => handleCategoryChange(category.value)}
              />
              <span className="text-sm text-gray-700">{category.title}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Product Listing */}
      <div className="my-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product: any) => (
              <li
                key={product.product_id}
                className="flex flex-col gap-2 bg-white p-3 rounded-lg shadow-md"
              >
                <img
                  src={product.product_image} 
                  className="w-full h-48 rounded-md object-cover"
                />
                <p className="font-semibold text-gray-800">{product.product_name}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[#E27210] text-lg">${product.price}</p>
                  <p className="text-green-600 font-medium text-sm">
                    ({product.quantity} in stock)
                  </p>
                </div>
              </li>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}


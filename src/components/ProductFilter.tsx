"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

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

  // Get selected categories from URL
  const selectedCategories = new Set(searchParams.getAll("category"));

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    const updatedCategories = new Set(selectedCategories);

    if (updatedCategories.has(category)) {
      updatedCategories.delete(category);
    } else {
      updatedCategories.add(category);
    }

    // Update URL with selected categories
    const params = new URLSearchParams();
    updatedCategories.forEach((cat) => params.append("category", cat));

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Fetch products based on selected categories
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
  }, [searchParams]); // Re-fetch when searchParams change

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <label key={category.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCategories.has(category.value)}
              onChange={() => handleCategoryChange(category.value)}
            />
            <span>{category.title}</span>
          </label>
        ))}
      </div>

      {/* Render Products */}
      <div className="mt-6">
        <h3 className="text-lg font-medium">Products</h3>
        <ul>
          {products.length > 0 ? (
            products.map((product: any) => (
              <li key={product.product_id} className="border p-2 my-2">
                {product.product_name}
              </li>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

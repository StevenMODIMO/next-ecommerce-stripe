import type { Metadata } from "next";
import ProductFilter from "@/components/ProductFilter";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

export default function page() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <header className="p-3">
          <h1 className="text-2xl font-bold text-gray-800">
            Explore all products
          </h1>
        </header>
        <Suspense fallback={<Loading />}>
          <ProductFilter />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

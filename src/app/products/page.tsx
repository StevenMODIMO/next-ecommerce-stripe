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
    <div className="max-w-7xl mx-auto p-4 bg-gray-50">
      <div>
        <Suspense fallback={<Loading />}>
          <ProductFilter />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

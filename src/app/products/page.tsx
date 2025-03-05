import type { Metadata } from "next";
import ProductFilter from "@/components/ProductFilter";
import { Suspense } from "react";
import Loading from "@/app/loading"

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

export default function page() {
  return (
    <div className="max-w-7xl mx-auto py-12 p-4">
      <div>
        <Suspense fallback={<Loading />}>
          <ProductFilter />
        </Suspense>
      </div>
    </div>
  );
}

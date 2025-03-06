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
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <Suspense fallback={<Loading />}>
          <ProductFilter />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

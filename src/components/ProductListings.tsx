import Products from "./Products"
import Loading from "@/app/loading";
import { Suspense } from "react";

export default async function ProductListings() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <header>
          <p>Get the most from our many categories</p>
        </header>
        {/* <Suspense fallback={<Loading />}> */}
          <Loading />
        {/* </Suspense> */}
      </div>
    </div>
  );
}

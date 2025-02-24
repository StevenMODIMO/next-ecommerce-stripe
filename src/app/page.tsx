import ProductListings from "@/components/ProductListings";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import CategoryListings from "@/components/CategoryListings";
import Contact from "@/components/Contact"
import Banner from "@/components/Banner"
import Loading from "./loading"
import { Suspense} from "react"

export default async function Home() {
  return (
    <div>
      {/* <Suspense fallback={<Loading />}>
        <ProductListings />
      </Suspense> */}
      <CategoryListings />
      <Loading />
      <Banner />
      <ScrollToTop />
      <Features />
      <Testimonials />
      <NewsLetter />
      <Contact />
      <Footer />
    </div>
  );
}

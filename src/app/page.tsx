import ProductListings from "@/components/ProductListings";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ScrollToTop from "@/components/ScrollToTop";

export default async function Home() {
  return (
    <div>
      <ScrollToTop />
      <ProductListings />
      <Features />
      <Testimonials />
    </div>
  );
}

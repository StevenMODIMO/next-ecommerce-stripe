import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Shipping from "@/components/Shipping";
import ProductListings from "@/components/ProductListings";
import CategoryListings from "@/components/CategoryListings";

export default async function Home() {
  return (
    <div>
      <ProductListings />
      <Features />
      <CategoryListings />
      <Testimonials />
      <Contact />
    </div>
  );
}

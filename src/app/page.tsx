import ProductListings from "@/components/ProductListings";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import CategoryListings from "@/components/CategoryListings";

export default async function Home() {
  return (
    <div>
      <CategoryListings />
      <ScrollToTop />
      <Features />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

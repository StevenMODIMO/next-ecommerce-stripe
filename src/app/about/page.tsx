import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Loading from "../loading"

export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <Loading />
      <Footer />
    </div>
  );
}

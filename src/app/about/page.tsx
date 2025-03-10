import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Loading from "../loading";
import Table from "@/components/Table";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <Loading />
      <Footer />
      <div className="px-4 sm:px-12 lg:px-16">
        <Table />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import AdminForm from "@/components/AdminForm";

export const metadata: Metadata = {
  title: "Admin Interface",
  description: "Admin interface to manage orders and process them",
};

export default function Admin() {
  return (
    <main className="my-4">
      <header className="text-xl font-semibold">
        <p>
          Quick cart: <span className="text-[#E27210]">Admin interface</span>
        </p>
      </header>
      <AdminForm />
    </main>
  );
}

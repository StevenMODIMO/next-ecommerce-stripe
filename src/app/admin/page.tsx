import type { Metadata } from "next";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminForm from "@/components/admin/AdminForm";
import AdminCard from "@/components/admin/AdminCard";

export const metadata: Metadata = {
  title: "Admin Interface",
  description:
    "Admin interface to add new products, view orders, process orders and delete or update existing products",
};

export default function Admin() {
  return (
    <div>
    <AdminHeader />
      <AdminCard>
        <AdminForm />
      </AdminCard>
    </div>
  );
}

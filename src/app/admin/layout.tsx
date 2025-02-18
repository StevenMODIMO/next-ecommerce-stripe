import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="flex gap-3 h-creen">
      <div className="w-[20%] border-r-2">
        <AdminHeader />
      </div>
      <div className="w-[70%]">{children}</div>
    </nav>
  );
}

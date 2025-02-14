"use client";
import { MdAdminPanelSettings } from "react-icons/md";

const AdminHeader = () => {
  return (
    <header className="relative cursor-pointer w-fit flex items-center gap-2 text-2xl text-gray-400 font-semibold group">
      <MdAdminPanelSettings />
      <h1>Admin Interface</h1>
      <span className="absolute left-0 top-10 opacity-0 scale-95 text-sm text-gray-700 bg-gray-100 p-2 rounded-lg transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100">
        Add, Delete, Update products and Process orders.
      </span>
    </header>
  );
};

export default AdminHeader;

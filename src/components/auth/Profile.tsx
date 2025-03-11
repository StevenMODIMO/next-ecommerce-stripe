"use client";
import { signOut, useSession } from "next-auth/react";
import { RiLogoutBoxFill } from "react-icons/ri";
import { motion } from "motion/react";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0.8 }}
      className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white border border-gray-200 p-4"
    >
      <header className="flex flex-col items-center">
        {user?.image ? (
          <img
            src={user.image}
            alt={user.email || "Avatar"}
            className="w-24 h-24 rounded-full border-4 p-2 border-[#E27210] object-cover"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-[#E27210] flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </header>
      <div className="mt-3 text-center">
        <p className="text-sm font-semibold text-gray-800">{user?.email}</p>
        <p className="text-xs text-[#E27210] font-medium">{user?.id}</p>
      </div>
      <div
        onClick={() => signOut()}
        className="flex items-center justify-center gap-2 mt-4 p-2 cursor-pointer text-[#E27210] hover:bg-gray-100 rounded-md"
      >
        <RiLogoutBoxFill className="text-lg" />
        <p className="text-sm font-medium">Log out</p>
      </div>
    </motion.div>
  );
}

"use client";
import Image from "next/image";
import logo from "@/app/assets/cart-logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link";
import Notifications from "./Notifications";

export default function Header() {
  return (
    <nav className="flex justify-between p-3 mt-1 shadow">
      <header className="relative w-36 sm:w-48">
        <Link href="/">
          <Image
            src={logo}
            alt="quick-cart-logo"
            className="absolute"
            priority
          />
        </Link>
      </header>
      <div className="flex gap-4">
        <Link href="/cart" className="text-2xl">
          <IoCartOutline />
        </Link>
        <div className="relative">
          <IoIosNotificationsOutline className="text-2xl" />
          <p className="absolute -top-1 -right-1 text-xs bg-[#E27210] rounded-full text-white w-4 h-4 tflex text-center">
            0
          </p>
        </div>
        <div>
          <MdOutlineAccountCircle className="text-2xl" />
        </div>
      </div>
    </nav>
  );
}

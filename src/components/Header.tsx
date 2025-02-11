"use client";
import Image from "next/image";
import logo from "@/app/assets/cart-logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";
import { navLinks } from "@/components/MobileNav";
import { TbPhoneCall, TbShoppingCartBolt } from "react-icons/tb";
import {
  MdOutlineFeaturedPlayList,
  MdMotionPhotosPaused,
} from "react-icons/md";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="fixed left-0 top-0 w-full flex justify-between p-3 mt-1 shadow z-9999">
      <header className="relative w-96">
        <Link href="/">
          <Image
            src={logo}
            alt="quick-cart-logo"
            className="absolute"
            priority
          />
        </Link>
      </header>
      <div className="flex items-center gap-4">
        {" "}
        <label className="rounded-md bg-gray-100 flex items-center gap-2">
          <IoIosSearch className="text-[#E27210] text-lg" />
          <input
            type="text"
            className="outline-none bg-gray-100 rounded-md p-1 text-gray-500"
            placeholder="Search Products ..."
          />
        </label>
        <div className="hidden md:flex md:gap-3 lg:mr-6">
          {navLinks.map(({ id, name, path }) => (
            <Link
              className="text-sm flex items-center gap-2 lg:text-[15px]"
              onClick={() => setShowLinks(false)}
              key={id}
              href={path}
            >
              {name === "Contact" ? (
                <TbPhoneCall />
              ) : name === "Features" ? (
                <MdOutlineFeaturedPlayList />
              ) : name === "Testimonials" ? (
                <MdMotionPhotosPaused />
              ) : name === "Shop" ? (
                <TbShoppingCartBolt />
              ) : (
                ""
              )}
              {name}
            </Link>
          ))}
        </div>
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
        <div onClick={() => setShowLinks(!showLinks)} className="md:hidden">
          {!showLinks ? <FaBars /> : <FaTimes />}
        </div>
      </div>
      {showLinks && <MobileNav setShowLinks={setShowLinks} />}
    </nav>
  );
}

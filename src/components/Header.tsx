"use client";
import Image from "next/image";
import logo from "@/app/assets/cart-logo.svg";
import { IoCartOutline } from "react-icons/io5";
import {
  IoIosNotificationsOutline,
  IoIosSearch,
  IoMdHeartEmpty,
} from "react-icons/io";
import { MdOutlineAccountCircle, MdOutlineNewLabel } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";
import { navLinks } from "@/components/MobileNav";
import { TbPhoneCall, TbShoppingCartBolt } from "react-icons/tb";
import { CgDarkMode } from "react-icons/cg";
import {
  MdOutlineFeaturedPlayList,
  MdMotionPhotosPaused,
} from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="fixed left-0 top-0 w-full flex justify-between p-3 shadow z-[50] sm:z-50 text-gray-700 bg-white">
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
        <label className="hidden lg:rounded-md lg:bg-gray-100 lg:flex lg:items-center lg:gap-2">
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
              className="text-sm flex items-center gap-2 lg:text-[15px] hover:border-b-2 hover:border-[#E27210] transition-all duration-75 ease-in-out"
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
              ) : name === "SignUp" ? (
                <MdOutlineNewLabel />
              ) : name === "SignIn" ? (
                <BiSolidLogIn />
              ) : (
                ""
              )}
              {name}
            </Link>
          ))}
        </div>
        <Link href="/cart" className="relative">
          <IoCartOutline className="text-2xl" />
          <p className="absolute -top-1 -right-2 text-xs bg-[#E27210] rounded-full text-white w-4 h-4 tflex text-center">
            0
          </p>
        </Link>
        <div className="relative">
          <IoIosNotificationsOutline className="text-2xl" />
          <p className="absolute -top-1 -right-2 text-xs bg-[#E27210] rounded-full text-white w-4 h-4 tflex text-center">
            0
          </p>
        </div>
        <div className="relative">
          <IoMdHeartEmpty className="text-2xl" />
          <p className="absolute -top-1 -right-2 text-xs bg-[#E27210] rounded-full text-white w-4 h-4 tflex text-center">
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

"use client";
import Image from "next/image";
import logo from "@/app/assets/cart-logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle, MdOutlineNewLabel } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect } from "react";
import { navLinks } from "@/components/MobileNav";
import { TbPhoneCall, TbShoppingCartBolt } from "react-icons/tb";
import {
  MdOutlineFeaturedPlayList,
  MdMotionPhotosPaused,
} from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";
import { AnimatePresence } from "motion/react";
import Profile from "./auth/Profile";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);
  return (
    <nav className="fixed left-0 top-0 w-full flex justify-between p-3 z-[50] sm:z-50 text-gray-700 bg-white">
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
        <div className="hidden lg:flex lg:gap-3 lg:mr-6">
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
            {cartCount}
          </p>
        </Link>
        <div className="relative">
          <MdOutlineAccountCircle
            className="text-2xl cursor-pointer"
            onClick={() => setShowProfile(!showProfile)}
          />
          <AnimatePresence>
            {showProfile && <Profile setShowProfile={setShowProfile} />}
          </AnimatePresence>
        </div>
        <div onClick={() => setShowLinks(true)} className="lg:hidden">
          <FaBars className="text-2xl" />
        </div>
      </div>
      <AnimatePresence>
        {showLinks && <MobileNav setShowLinks={setShowLinks} />}
      </AnimatePresence>
    </nav>
  );
}

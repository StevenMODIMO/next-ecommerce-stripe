"use client";
import Image from "next/image";
import logo from "@/app/assets/cart-logo.svg";
import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";

import Browse from "./Browse";
import Details from "./Details";
import Payment from "./Payment";
import Review from "./Review";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200"],
});

export default function Intro() {
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActive(active === 4 ? 0 : active + 1);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [active]);

  return (
    <main
      className={`${inter.className} font-medium bg-gradient-to-r from-[#E27210] via-orange-400 to-orange-500 h-screen text-white md:w-[50%] sm:px-12`}
    >
      <header className="p-4 relative md:p-4">
        <Image
          src={logo}
          alt="cart-logo"
          className="absolute w-28 md:w-28 sm:w-36"
        />
      </header>
      {active === 0 ? (
        <section className="h-[80%]">
          <p className="text-4xl p-4 mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-300 to-orange-200 sm:text-6xl md:p-2 md:text-4xl lg:text-7xl">
            Shopping Made Simple and Fast
          </p>
          <p className="p-4 sm:text-xl md:text-lg md:p-2 lg:text-2xl">
            Get what you need in just a few clicks. Shop, pay and enjoy easy
            checkout.
          </p>
          <p className="p-4 font-semibold sm:text-2xl md:text-lg lg:text-4xl md:p-2">
            With <span>QuickCart</span>, shopping is streamlined for your
            convenience. Select items, review your cart and checkout seamlessly
            in a few easy steps.
          </p>
          <div className="border-2 border-white w-fit mx-auto rounded p-2 mt-4 md:hidden sm:mt-0 lg:mt-4">
            Start Shopping
          </div>
        </section>
      ) : active === 1 ? (
        <Browse />
      ) : active === 2 ? (
        <Review />
      ) : active === 3 ? (
        <Details />
      ) : active === 4 ? (
        <Payment />
      ) : null}

      <section className="flex gap-3 w-fit mx-auto mt-8 lg:mt-10">
        <FaCircle
          onClick={() => setActive(0)}
          className={
            active === 0
              ? "text-white text-[8px]"
              : "text-[#ffab62]  text-[8px]"
          }
        />
        <FaCircle
          onClick={() => setActive(1)}
          className={
            active === 1
              ? "text-white  text-[8px]"
              : "text-[#ffab62]  text-[8px]"
          }
        />
        <FaCircle
          onClick={() => setActive(2)}
          className={
            active === 2
              ? "text-white  text-[8px]"
              : "text-[#ffab62]  text-[8px]"
          }
        />
        <FaCircle
          onClick={() => setActive(3)}
          className={
            active === 3
              ? "text-white  text-[8px]"
              : "text-[#ffab62]  text-[8px]"
          }
        />
        <FaCircle
          onClick={() => setActive(4)}
          className={
            active === 4
              ? "text-white  text-[8px]"
              : "text-[#ffab62]  text-[8px]"
          }
        />
      </section>
    </main>
  );
}

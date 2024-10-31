"use client";
import Image from "next/image";
import logo from "@/app/assets/cart-logo.svg";
import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";

import Browse from "./Browse";
import Details from "./Details";
import Payment from "./Payment";
import Review from "./Review";

export default function Intro() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active === 4 ? 0 : active + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <main className="bg-[#E27210] h-screen text-white md:w-[50%] sm:px-12">
      {active === 0 ? (
        <section>
          <header className="p-4 relative md:p-6">
            <Image
              src={logo}
              alt="cart-logo"
              className="absolute w-28 md:w-28 sm:w-36"
            />
          </header>
          <p className="text-lg p-4 mt-4 sm:text-xl">
            Shopping Made Simple and Fast
          </p>
          <p className="p-3 text-lg font-medium sm:text-xl">
            Get what you need in just a few clicks. Shop, pay and enjoy easy
            checkout.
          </p>
          <p className="p-4 text-xl mt-3 font-semibold sm:text-2xl">
            With <span>QuickCart</span>, shopping is streamlined for your
            convenience. Select items, review your cart and checkout seamlessly
            in a few easy steps.
          </p>
          <div className="border-2 border-white w-fit mx-auto rounded p-2 mt-4">
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

      <section className="flex gap-3 w-fit mx-auto mt-8">
        <FaCircle
          onClick={() => setActive(0)}
          className={
            active === 0 ? "text-white text-xs" : "text-[#ffab62] text-xs"
          }
        />
        <FaCircle
          onClick={() => setActive(1)}
          className={
            active === 1 ? "text-white text-xs" : "text-[#ffab62] text-xs"
          }
        />
        <FaCircle
          onClick={() => setActive(2)}
          className={
            active === 2 ? "text-white text-xs" : "text-[#ffab62] text-xs"
          }
        />
        <FaCircle
          onClick={() => setActive(3)}
          className={
            active === 3 ? "text-white text-xs" : "text-[#ffab62] text-xs"
          }
        />
        <FaCircle
          onClick={() => setActive(4)}
          className={
            active === 4 ? "text-white text-xs" : "text-[#ffab62] text-xs"
          }
        />
      </section>
    </main>
  );
}

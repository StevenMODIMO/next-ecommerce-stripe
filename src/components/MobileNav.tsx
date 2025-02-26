"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { TbPhoneCall, TbShoppingCartBolt } from "react-icons/tb";
import {
  MdOutlineFeaturedPlayList,
  MdMotionPhotosPaused,
  MdOutlineNewLabel,
} from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

interface PropTypes {
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LinkTypes {
  id: number;
  name: string;
  path: string;
}

export const navLinks: LinkTypes[] = [
  {
    id: 1,
    name: "Contact",
    path: "/#contact",
  },
  {
    id: 2,
    name: "Features",
    path: "/#features",
  },
  {
    id: 3,
    name: "Testimonials",
    path: "/#testimonials",
  },
  {
    id: 4,
    name: "Shop",
    path: "/products",
  },
  {
    id: 5,
    name: "SignUp",
    path: "/signup",
  },
  {
    id: 6,
    name: "SignIn",
    path: "/signin",
  },
];

export default function MobileNav({ setShowLinks }: PropTypes) {
  return (
    <motion.div
      initial={{ x: -1200 }}
      animate={{ x: 0 }}
      exit={{ x: -1200 }}
      transition={{ duration: 0.3 }}
      className="absolute top-0 left-0 p-4 bg-white w-full h-screen lg:hidden"
    >
      <div className="flex justify-end" onClick={() => setShowLinks(false)}>
        <FaTimes className="text-2xl" />
      </div>
      <div className="flex flex-col gap-4">
        {navLinks.map(({ id, name, path }) => (
          <Link
            className="text-lg flex items-center gap-3 font-medum text-gray-700"
            onClick={() => setShowLinks(false)}
            key={id}
            href={path}
          >
            {name === "Contact" ? (
              <TbPhoneCall className="text-2xl" />
            ) : name === "Features" ? (
              <MdOutlineFeaturedPlayList className="text-2xl" />
            ) : name === "Testimonials" ? (
              <MdMotionPhotosPaused className="text-2xl" />
            ) : name === "Shop" ? (
              <TbShoppingCartBolt className="text-2xl" />
            ) : name === "SignUp" ? (
              <MdOutlineNewLabel className="text-2xl" />
            ) : name === "SignIn" ? (
              <BiSolidLogIn className="text-2xl" />
            ) : (
              ""
            )}
            {name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

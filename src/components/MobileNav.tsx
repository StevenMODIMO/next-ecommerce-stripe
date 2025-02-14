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
      initial={{ y: -1200 }}
      animate={{ y: 0 }}
      exit={{ y: -1200 }}
      transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="absolute top-12 left-0 p-2 bg-gray-100/90 w-full sm:w-[50%] sm:p-2 sm:left-[50%] md:hidden"
    >
      <div className="flex flex-col gap-4">
        {navLinks.map(({ id, name, path }) => (
          <Link
            className="text-sm flex items-center gap-2"
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
    </motion.div>
  );
}

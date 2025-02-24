"use client";
import { TbHelpHexagon } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk, MdAlternateEmail } from "react-icons/md";
import {
  FaFacebook,
  FaApple,
  FaMobile,
  FaInstagram,
  FaLinkedin,
  FaCcVisa,
  FaPaypal,
  FaCcMastercard,
  FaGooglePay,
  FaApplePay,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoMdLink } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="pb-16 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:px-12 lg:px-16">
        <section>
          <header className="flex gap-2 items-center text-[#E27210] my-4">
            <TbHelpHexagon className="text-2xl" />
            <h1 className="font-medium text-lg text-gray-700">
              Help & Support
            </h1>
          </header>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <IoLocationOutline className="text-lg text-[#E27210]" />
              <p className="text-gray-500 text-sm font-medium">Planet Earth</p>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlinePhoneInTalk className="text-lg text-[#E27210]" />
              <p className="text-gray-500 text-sm font-medium">
                (+3)124 567 890
              </p>
            </li>
            <li className="flex items-center gap-2">
              <MdAlternateEmail className="text-lg text-[#E27210]" />
              <p className="text-gray-500 text-sm font-medium">
                help@quick-cart.com
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <FaLinkedin className="text-lg text-gray-700" />
              <FaFacebook className="text-lg text-gray-700" />
              <FaInstagram className="text-xl text-gray-700" />
              <FaXTwitter className="text-lg text-gray-700" />
            </li>
          </ul>
        </section>
        <section>
          <header className="flex gap-2 items-center text-[#E27210] my-4">
            <IoMdLink className="text-2xl" />
            <h1 className="font-medium text-lg text-gray-700">Quick Links</h1>
          </header>
          <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>FAQ's</li>
            <li>User Agreement</li>
            <li>Refund Policy</li>
            <li>Our Mission</li>
            <li>Our Vision</li>
          </ul>
        </section>
        <section>
          <header className="flex gap-2 items-center text-[#E27210] my-4">
            <FaMobile className="text-2xl" />
            <h1 className="font-medium text-lg text-gray-700">
              Get Mobile App
            </h1>
          </header>
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <li className="flex items-center gap-2 text-gray-700 font-medium">
              <IoLogoGooglePlaystore />
              <span>Play Store</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700 font-medium">
              <FaApple />
              <span>Apple Store</span>
            </li>
          </ul>
        </section>
      </div>
      <section className="max-w-7xl px-4 flex flex-col gap-8 md:mt-8 sm:px-12 lg:px-16">
        <p className="text-center text-gray-800 font-medium mt-4 text-sm">
          &copy; Quick Cart {new Date().getFullYear()} All rights reserved.
        </p>
        <section className="flex gap-2 itemms-center justify-center">
          <FaCcVisa className="text-2xl" />
          <FaPaypal className="text-2xl" />
          <FaCcMastercard className="text-2xl" />
          <FaGooglePay className="text-2xl" />
          <FaApplePay className="text-2xl" />
        </section>
      </section>
    </footer>
  );
}

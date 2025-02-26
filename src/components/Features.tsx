"use client";
import { features } from "@/lib/data";
import {
  MdLocalShipping,
  MdOutlineSecurity,
  MdOutlineHeadsetMic,
  MdOutlineFeaturedPlayList,
} from "react-icons/md";
import { FaArrowsSpin } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa";

export default function Features() {
  return (
    <div className="w-full py-8 min-h-[60vh]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <header>
          <div className="my-2 h-[1.5px] w-12 rounded-md bg-[#E27210]"></div>
          <div className="text-sm text-gray-500 flex items-center gap-2 lg:text-lg lg:font-semibold">
            <MdOutlineFeaturedPlayList className="text-[#E27210]" />
            <p>Our Features</p>
          </div>
          <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
            Why Shop With Us?
          </h1>
        </header>
        <div className="mt-4 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ id, title, description }) => {
            return (
              <div key={id} className="flex gap-3 lg:gap-6">
                <div>
                  {id === 1 && (
                    <MdLocalShipping className="h-10 w-10 text-[#E27210] lg:h-12 lg:w-12" />
                  )}
                  {id === 2 && (
                    <FaArrowsSpin className="h-10 w-10 text-[#E27210] lg:h-12 lg:w-12" />
                  )}
                  {id === 3 && (
                    <MdOutlineSecurity className="h-10 w-10 text-[#E27210] lg:h-12 lg:w-12" />
                  )}
                  {id === 4 && (
                    <FaSearchengin className="h-10 w-10 text-[#E27210] lg:h-12 lg:w-12" />
                  )}
                  {id === 5 && (
                    <MdOutlineHeadsetMic className="h-10 w-10 text-[#E27210] lg:h-12 lg:w-12" />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium text-lg text-gray-700 lg:text-xl">
                    {title}
                  </h1>
                  <p className="text-xs text-gray-600 lg:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

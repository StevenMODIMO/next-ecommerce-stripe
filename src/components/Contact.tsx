"use client";
import {
  MdOutlineFeaturedPlayList,
  MdDriveFileRenameOutline,
  MdOutlinePhoneIphone,
  MdSubject,
} from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="py-16 bg-gray-100 min-h-[60vh]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <header className="mb-8">
          <div className="w-12 h-[2px] bg-[#E27210]"></div>
          <div className="mt-2 text-lg font-semibold text-gray-700 flex items-center gap-2">
            <MdOutlineFeaturedPlayList className="text-[#E27210] text-xl" />
            <p>Contact Us</p>
          </div>
          <p className="text-sm text-gray-600 font-medium mt-2">
            Have an inquiry about our products and services? Feel free to reach
            out.
          </p>
        </header>

        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <MdDriveFileRenameOutline className="text-[#E27210]" />
                First Name
              </span>
              <input
                type="text"
                placeholder="Enter your first name"
                className="outilne-none p-3 border rounded-md outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <MdDriveFileRenameOutline className="text-[#E27210]" />
                Last Name
              </span>
              <input
                type="text"
                placeholder="Enter your last name"
                className="p-3 border rounded-md outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <MdOutlinePhoneIphone className="text-[#E27210]" />
                Phone Number
              </span>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="p-3 border rounded-md outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <MdSubject className="text-[#E27210]" />
                Subject
              </span>
              <input
                type="text"
                placeholder="Enter subject"
                className="p-3 border rounded-md outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col mt-6">
            <span className="text-gray-700 font-medium flex items-center gap-2">
              <FaRegMessage className="text-[#E27210]" />
              Message
            </span>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="p-3 border rounded-md outline-none resize-none"
            ></textarea>
          </label>
          <button
            disabled
            className="mt-6 flex items-center justify-center gap-2 bg-[#E27210] text-white px-6 py-3 rounded-md font-semibold transition hover:bg-[#c85d08] w-full md:w-auto"
          >
            <span>Send Message</span>
            <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
}

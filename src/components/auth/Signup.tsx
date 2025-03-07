"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) formData.append("avatar", avatar);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();

    if (json.error) {
      setError(json.error);
      setLoading(false);
    } else {
      setError(null);
      setPassword("");
      setEmail("");
      setAvatar(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
    }
  };
  return (
    <div className="max-w-7xl mx-auto text-gray-800 px-4 sm:px-12 lg:px-16">
      <section className="flex flex-col gap-1 shadow rounded p-3">
        <header className="font-medium text-center text-lg">
          <h1>Create account to get started</h1>
        </header>
        <form
          onSubmit={handleSubmit}
          onFocus={() => setError(null)}
          className="flex flex-col gap-3 my-4 w-64 mx-auto"
        >
          <label className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MdAlternateEmail className="text-[#E27210]" />
              <span>Email address</span>
            </div>
            <input
              className="p-2 outline-none border rounded w-full"
              placeholder="example@gmail.com"
            />
          </label>
          <label className="flex flex-col gap-2">
            <section className="flex justify-between">
              <div className="flex items-center gap-2">
                <RiLockPasswordLine className="text-[#E27210]" />
                <span>Password</span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEyeSlash className="text-[#E27210]" />
                ) : (
                  <FaEye className="text-[#E27210]" />
                )}
              </div>
            </section>
            <input
              className="p-2 outline-none border rounded w-full"
              placeholder="Your strong password"
              type={showPassword ? "text" : "password"}
            />
          </label>
          <label className="flex items-center gap-1">
            <CiImageOn className="text-[#E27210]" />
            <span>Upload Avatar</span>
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <button className="text-white bg-[#E27210] rounded p-2 w-fit mx-auto">
            Create account
          </button>
          {error && (
            <div className="text-white bg-red-500 p-2 rounded w-fit mx-auto">
              {error}
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

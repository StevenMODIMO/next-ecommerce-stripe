"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  FaEye,
  FaRegEyeSlash,
  FaCheckCircle,
  FaImage,
  FaFacebook,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

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
      console.log(json);
      setError(null);
      setPassword("");
      setEmail("");
      setAvatar(null);
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
      });
      router.push("/products");
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
      <section className="flex flex-col gap-1 shadow rounded p-3 sm:w-[70%] sm:mx-auto lg:p-8 lg:w-[40%]">
        <header className="font-medium text-center text-xl">
          <h1>Create account to get started</h1>
        </header>
        <form
          onSubmit={handleSubmit}
          onFocus={() => setError(null)}
          className="flex flex-col gap-3 my-4 "
        >
          <label className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MdAlternateEmail className="text-[#E27210]" />
              <span>Email address</span>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 outline-none border rounded"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 outline-none border rounded"
              placeholder="Your strong password"
              type={showPassword ? "text" : "password"}
            />
          </label>
          <label className="flex items-center gap-1">
            {avatar ? (
              <FaCheckCircle className="text-[#E27210]" />
            ) : (
              <FaImage className="text-[#E27210]" />
            )}
            {avatar ? <span>Avatar Uploaded</span> : <span>Upload Avatar</span>}
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <button
            className={
              !loading
                ? "flex items-center justify-center text-white bg-[#E27210] rounded p-2 w-fit mx-auto"
                : "text-white bg-[#E27210] rounded p-2 w-fit mx-auto"
            }
          >
            {loading ? (
              <span className="flex items-center justify-center gap-1">
                <span className="animate-spin h-5 w-5 rounded-full border-4 border-t-transparent border-white"></span>
                <span>processing...</span>
              </span>
            ) : (
              <span>Create account</span>
            )}
          </button>
          {error && (
            <div className="text-white bg-red-500 p-2 rounded text-center">
              {error}
            </div>
          )}
          <div className="text-sm text-gray-800 font-medium my-2">
            <span>Already have an account ? </span>
            <Link href="/login" className="text-gray-700 underline">
              Sign In
            </Link>
          </div>
      </section>
    </div>
  );
}

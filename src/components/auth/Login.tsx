"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaRegEyeSlash, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: process.env.BASE_URL as string,
    });

    if (response?.error) {
      setError(response.error);
      setEmail("");
      setPassword("");
      setLoading(false);
    } else {
      setError(null);
      setEmail("");
      setPassword("");
      setLoading(false);
      router.push("/products")
    }
  };
  return (
    <div className="max-w-7xl mx-auto text-gray-800 px-4 sm:px-12 lg:px-16">
      <section className="flex flex-col gap-1 shadow rounded p-3">
        <header className="font-medium text-center text-xl">
          <h1>Sign In to Continue</h1>
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
              <span>Sign In</span>
            )}
          </button>
          {error && (
            <div className="text-white bg-red-500 p-2 rounded text-center">
              {error}
            </div>
          )}
          <div className="text-sm text-gray-800 font-medium my-2">
            <span>Don't have an account ? </span>
            <Link href="/signup" className="text-gray-700 underline">
              Create account
            </Link>
          </div>
        </form>
        <div className="my-5 py-4 text-gray-800 text-center border-y text-base font-medium">
          or continue with
        </div>
        <footer className="my-2 flex flex-col gap-2">
          <div className="flex items-center gap-1 p-2 border rounded-md">
            <FaFacebook />
            <p className="text-gray-700 text-lg">Facebook</p>
          </div>
          <div className="flex items-center gap-1 p-2 border rounded-md">
            <FaXTwitter />
            <p className="text-gray-700 text-lg">Twitter</p>
          </div>
          <div className="flex items-center gap-1 p-2 border rounded-md">
            <FcGoogle />
            <p className="text-gray-700 text-lg">Google</p>
          </div>
        </footer>
      </section>
    </div>
  );
}

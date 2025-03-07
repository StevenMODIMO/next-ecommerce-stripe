"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

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
      router.push("/profile");
    }
  };
  return (
    <div>
      <header className="text-gray-800 font-medium">
        <h1>Sign In to continue</h1>
      </header>
      <form
        onSubmit={handleSubmit}
        onFocus={() => setError(null)}
        className="flex flex-col gap-3 p-4"
      >
        <label>
          <div className="flex items-center gap-2">
            <MdAlternateEmail />
            <span>Email address</span>
          </div>
          <input
            className="p-3 outline-none border rounded"
            placeholder="example@gmail.com"
          />
        </label>
        <label>
          <section>
            <div className="flex items-center gap-2">
              <RiLockPasswordLine />
              <span>Passowrd</span>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaEye />}
            </div>
          </section>
          <input
            className="p-3 outline-none border rounded"
            placeholder="Your strong password"
            type={showPassword ? "text" : "password"}
          />
        </label>
        <button>Sign In </button>
        {error && (
          <div className="text-white bg-red-500 p-2 rounded w-fit mx-auto">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

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
    <div>
      <header className="text-gray-800 font-medium">
        <h1>Create account to get started</h1>
      </header>
      <form
        onSubmit={handleSubmit}
        onFocus={() => setError(null)}
        className="flex flex-col gap-3 p-4"
      >
        <label className="flex items-center gap-1">
          <CiImageOn />
          <span>Upload Avatar</span>
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
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
          <section className="flex justify-between">
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

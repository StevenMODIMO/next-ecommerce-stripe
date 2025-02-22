"use client";

interface Categories {
  id: number;
  value: string;
  name: string;
}

import React, { useState } from "react";
import ProductOutput from "./ProductOutput";
import { FaFileMedical } from "react-icons/fa";

export default function AdminForm() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [category, setCategory] = useState("gaming");
  const [error, setError] = useState<string | null>("");
  const [largeImage, setLargeImage] = useState<File | null>(null);
  const [largePreview, setLargePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>("");

  const categories: Categories[] = [
    {
      id: 1,
      value: "gaming",
      name: "Gaming",
    },
    {
      id: 2,
      value: "fashion",
      name: "Fashion",
    },
    {
      id: 3,
      value: "grocery",
      name: "Grocery",
    },
    {
      id: 4,
      value: "televison",
      name: "Television",
    },
    {
      id: 5,
      value: "camera",
      name: "Camera",
    },
    {
      id: 6,
      value: "automotive",
      name: "Automotive",
    },
    {
      id: 7,
      value: "books",
      name: "Books & Stationery",
    },
    {
      id: 8,
      value: "travel",
      name: "Travel & Luggage",
    },
    {
      id: 9,
      value: "furniture",
      name: "Furniture",
    },
    {
      id: 10,
      value: "watches",
      name: "Watches",
    },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleLargeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLargeImage(file);
      setLargePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("product_description", description);
    formData.append("price", price.toString());
    formData.append("quantity", quantity.toString());
    formData.append("product_category", category);
    formData.append("product_image", imageFile as Blob);
    formData.append("large_image", largeImage as Blob);

    const response = await fetch("/api/admin", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();

    if (response.ok) {
      setName("");
      setDescription("");
      setPrice(1);
      setQuantity(1);
      setCategory("gaming");
      setError(null);
      setImageFile(null);
      setImagePreview(null);
      setMessage(json.message);
      setLargeImage(null);
      setLargePreview(null);
      setLoading(false);
    } else {
      setLargeImage(null);
      setLargePreview(null);
      console.log(json.error);
      setError(json.error);
      setName("");
      setDescription("");
      setPrice(1);
      setQuantity(1);
      setCategory("gaming");
      setImageFile(null);
      setImagePreview(null);
      setLoading(false);
      setMessage(null);
    }
  };

  return (
    <div className="flex gap-3 items-center justify-center">
      <form
        className="flex flex-col text-gray-400 p-4 rounded-md"
        onSubmit={handleSubmit}
        onFocus={() => setError(null)}
      >
        {error && (
          <div className="bg-red-400 rounded-md p-2 w-fit mx-auto text-white font-semibold">
            {error}
          </div>
        )}
        <label className="flex flex-col items-center gap-2 cursor-pointer">
          <FaFileMedical size={24} />
          <input
            type="file"
            accept="image/*"
            onChange={handleLargeImageUpload}
            className="hidden"
          />
          <p className="text-sm">Upload Large Image</p>
        </label>
        <label className="flex flex-col items-center gap-2 cursor-pointer">
          <FaFileMedical size={24} />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <p className="text-sm">Upload Image</p>
        </label>

        <label>
          <p>Name</p>
          <input
            className="p-2 rounded-md outline-none border shadow w-96"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />
        </label>

        <label>
          <p>Description</p>
          <textarea
            className="p-2 rounded-md outline-none border shadow w-96 h-24"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
          ></textarea>
        </label>

        <label>
          <p>Price</p>
          <input
            type="number"
            className="p-2 rounded-md outline-none border shadow w-96"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Enter product price"
          />
        </label>

        <label>
          <p>Quantity</p>
          <input
            type="number"
            className="p-2 rounded-md outline-none border shadow w-96"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Math.min(12, Number(e.target.value))))
            }
            min={1}
            max={12}
            placeholder="Enter product quantity"
          />
        </label>
        <label>
          <p>Product Category:</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 outline-none rounded border border-[#E27210]"
          >
            {categories.map(({ id, value, name }) => (
              <option value={value} key={id} className="rounded border-none">
                {name}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="text-white mt-2 bg-[#E27210] w-fit mx-auto p-2 rounded-tr rounded-bl"
        >
          {loading ? "Please wait ...." : "Add product"}
        </button>
      </form>

      {message && (
        <div className="fixed top-0 left-[50%] rounded-md p-2 bg-green-500 text-white font-semibold">
          Alert Message
        </div>
      )}
      <ProductOutput
        name={name}
        description={description}
        price={price}
        quantity={quantity}
        image={imagePreview}
        category={category}
        largeImage={largePreview}
      />
    </div>
  );
}

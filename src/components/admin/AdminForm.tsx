"use client";

import { useState } from "react";
import ProductOutput from "./ProductOutput";
import { FaFileMedical } from "react-icons/fa";

export default function AdminForm() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex gap-3 items-center justify-center">
      <form className="flex flex-col gap-3 text-gray-400 p-4 rounded-md">
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

        <button
          type="submit"
          className="text-white bg-[#E27210] w-fit mx-auto p-2 rounded-tr rounded-bl"
        >
          Add product
        </button>
      </form>

      <ProductOutput
        name={name}
        description={description}
        price={price}
        quantity={quantity}
        image={imagePreview}
      />
    </div>
  );
}

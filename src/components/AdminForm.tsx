"use client";
import Card from "./Card";
import { useState } from "react";
import { MdOutlineAttachment } from "react-icons/md";

export default function AdminForm() {
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("price", price);
    if (file) {
      formData.append("file", file);
    }

    const response = await fetch("/api/admin", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();

    if (response.ok) {
      console.log(json);
      setProductName("")
      setDescription("")
      setCategory("")
      setPrice("")
      setQuantity("")
    } else {
      console.log(json.error);
    }
  };

  return (
    <Card>
      <div className="p-3">
        <form onSubmit={handleSubmit}>
          <header className="p-2 text-lg text-[#E27210] font-semibold">
            Add new product
          </header>
          <label className="flex items-center gap-2 p-1 w-fit">
            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
            />
            <MdOutlineAttachment />
            <p className="text-gray-700 text-sm">File attachment</p>
          </label>
          <label className="flex flex-col gap-2 p-1">
            <p className="text-gray-700 text-sm">Product name</p>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Computer chip"
              className="outline-none p-1 rounded border border-[#E27210] w-96"
            />
          </label>
          <label className="flex flex-col gap-2 p-1">
            <p className="text-gray-700 text-sm">Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Computer chip"
              className="outline-none p-1 rounded border border-[#E27210] w-96"
            ></textarea>
          </label>
          <label className="flex flex-col gap-2 p-1">
            <p className="text-gray-700 text-sm">Category</p>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Electronic"
              className="outline-none p-1 rounded border border-[#E27210] w-96"
            />
          </label>
          <label className="flex flex-col gap-2 p-2">
            <p className="text-gray-700 text-sm">Quantity</p>
            <input
              type="number"
              value={quantity || ""}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Number of the products available"
              className="outline-none p-1 rounded border border-[#E27210] w-96"
            />
          </label>
          <label className="flex flex-col gap-2 p-1">
            <p className="text-gray-700 text-sm">Price</p>
            <input
              type="number"
              value={price || ""}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="500 - all prices are set in USD"
              className="outline-none p-1 rounded border border-[#E27210] w-96"
            />
          </label>
          <button className="text-gray-500 p-1 rounded border border-[#E27210] w-fit m-1 hover:bg-gradient-to-r from-[#E27210] hover:transition-all duration-75 ease-in-out">
            Add product
          </button>
        </form>
      </div>
    </Card>
  );
}

"use client";
import { useState } from "react";
import ProductOutput from "./ProductOutput";

export default function AdminForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(1); // Ensure price is either a number or an empty string
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div>
      <form className="flex flex-col gap-3 text-gray-400 p-4 rounded-md">
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
        <button className="text-white bg-[#E27210] w-fit mx-auto p-2 rounded-tr rounded-bl">
          Add product
        </button>
      </form>
      <ProductOutput
        name={name}
        description={description}
        price={price}
        quantity={quantity}
      />
    </div>
  );
}

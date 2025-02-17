"use client";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export default function ProductOutput({
  name,
  description,
  price,
  quantity,
}: ProductProps) {
  return (
    <div className="p-3 rounded-bl rounded-tr text-gray-400 border shadow flex flex-col gap-2">
      <header>
        <h1 className="text-2xl font-bold text-gray-500">{name}</h1>
        <p className="text-lg font-bold">{description}</p>
      </header>
      <div>
        <p>Starting at: {price}</p>
        <p>Available:{quantity}</p>
      </div>
    </div>
  );
}

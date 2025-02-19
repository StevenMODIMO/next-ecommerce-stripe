"use client";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string | null;
  category: string;
  largeImage: string | null;
}

export default function ProductOutput({
  name,
  description,
  price,
  quantity,
  image,
  category,
  largeImage,
}: ProductProps) {
  return (
    <div className="p-3 rounded-bl rounded-tr text-gray-400 border shadow flex flex-col gap-2 w-96">
      {largeImage && (
        <div className="w-full flex justify-center">
          <img
            src={largeImage}
            alt="Product Preview"
            className="object-contain w-[1200px] rounded-md"
          />
        </div>
      )}
      {image && (
        <div className="w-full h-48 flex justify-center">
          <img
            src={image}
            alt="Product Preview"
            className="object-contain w-[400px] rounded-md"
          />
        </div>
      )}
      <header>
        <h1 className="text-2xl font-bold text-gray-500">{name}</h1>
        <p className="text-lg font-bold">{description}</p>
      </header>
      <div>
        <p>Starting at: ${price}</p>
        <p>Available: {quantity}</p>
      </div>
      <p>You selected category of: {category}</p>
    </div>
  );
}

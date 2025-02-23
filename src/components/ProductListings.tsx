interface Products {
  product_id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  product_image: string;
  price: string;
  quantity: string;
}
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductListings() {
  const response = await fetch(`${process.env.BASE_URL}/api/products`, {
    cache: "no-store",
  });
  const data = await response.json();

  if (response.status == 404) {
    notFound();
  }

  const products: Products[] = data;
  return (
    <div className="bg-gray-50 max-w-7xl mx-auto rounded-md shadow lg:mx-16">
      <header>
        <h1>Products</h1>
        <ul className="lg:grid lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <li key={product.product_id}>
              <Image
                src={product.product_image}
                alt={product.product_name}
                width={200}
                height={200}
              />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

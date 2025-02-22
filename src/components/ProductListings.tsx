interface Products {
  product_id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  product_image: string;
  price: string;
  quantity: string;
}

import Image from "next/image";

export default async function ProductListings() {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  const products: Products[] = data;
  return (
    <div>
      <header>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.product_id}>
              <h2>{product.product_name}</h2>
              <p>{product.product_description}</p>
              <p>{product.product_category}</p>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
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

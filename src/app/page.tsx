import Link from "next/link";
import Image from "next/image";

interface Products {
  _id: string;
  productName: string;
  price: string;
  fileUrl: string;
}


export default async function Home() {
  const response = await fetch("http://localhost:3000/api/admin");
  const products: Products[] = await response.json();

  return (
    <div>
      {products.map(({ _id, productName, price, fileUrl }) => (
        <Link key={_id} href={_id}>
          <Image src={fileUrl} alt={productName} width={60} height={60} />
          <p>{productName}</p>
          <p>{price}</p>
        </Link>
      ))}
    </div>
  );
}

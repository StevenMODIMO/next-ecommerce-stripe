import Link from "next/link";
import Image from "next/image";

interface Products {
  _id: string;
  productName: string;
  price: string;
  fileUrl: string;
}

export default async function Home() {
  // const response = await fetch("http://localhost:3000/api/admin");
  // const products: Products[] = await response.json();


  return (
    <div className="w-[80%] mx-auto">
      {/* {products.map(({ _id, productName, price, fileUrl }) => (
        <section key={_id}>
          <div>
            <Image src={fileUrl} alt={productName} width={40} height={40} />
          </div>
          <p>{productName}</p>
          <p>{price}</p>
        </section>
      ))} */}
    </div>
  );
}

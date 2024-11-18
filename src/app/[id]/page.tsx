import Image from "next/image";

interface ProductTypes {
  id: string;
  productName: string;
  description: string;
  price: string;
  fileUrl: string;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:3000/api/admin/${params.id}`);
  const { productName, description }: ProductTypes = await response.json();

  return {
    title: productName,
    description,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:3000/api/admin/${params.id}`);
  const { id, productName, description, price, fileUrl }: ProductTypes =
    await response.json();
  return (
    <main>
      <Image src={fileUrl} alt={productName} width={100} height={100} />
      <p>{productName}</p>
      <p>{description}</p>
      <p>{price} USD</p>
    </main>
  );
}

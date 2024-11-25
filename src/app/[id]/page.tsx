import Image from "next/image";

interface ProductTypes {
  id: string;
  productName: string;
  description: string;
  price: string;
  fileUrl: string;
  category: string;
}

type Params = Promise<{ id: string }>;


export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:3000/api/admin/${id}`);
  const { productName, description }: ProductTypes = await response.json();

  return {
    title: productName,
    description,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:3000/api/admin/${id}`);

  const { productName, description, price, fileUrl, category }: ProductTypes =
    await response.json();
  return (
    <main>
      <Image src={fileUrl} alt={productName} width={100} height={100} />
      <p>{productName}</p>
      <p>{description}</p>
      <p>{price} USD</p>
      <p>{category}</p>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import Categories from "@/components/Categories";

interface Products {
  _id: string;
  productName: string;
  price: string;
  fileUrl: string;
}

export default async function Home() {
  let products: Products[] = [];

  try {
    const response = await fetch("http://localhost:3000/api/admin", {
      next: { revalidate: 60 }, // Optional: Cache the data for 60 seconds in ISR.
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    products = await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="my-3">
      <header className="font-bold text-xl sm:text-2xl lg:text-3xl">
        <h1>Best selling products</h1>
      </header>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {products.map(({ _id, productName, price, fileUrl }) => (
            <div className="p-2" key={_id}>
              <Link href={_id}>
                <section className="relative w-full h-36 bg-gray-100 rounded-md">
                  <Image src={fileUrl} alt={productName} fill={true} />
                </section>
                <p>{productName}</p>
                <p className="text-[#E27210] font-semibold">${price}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          No products available at the moment. Please check back later.
        </p>
      )}
      <main>
        <header className="text-3xl font-bold text-[#E27210]">
          <h1>Sort by category</h1>
        </header>
      </main>
      <Categories />
    </div>
  );
}

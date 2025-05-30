import ProductModal from "@/components/ProductModal";
import AddToCart from "@/components/AddToCart";

type Params = Promise<{ slug: string }>;

interface Product {
  product_id: string;
  product_name: string;
  product_description: string;
  price: string;
  quantity: string;
  product_category: string;
  large_image: string;
  product_image: string;
}

export default async function Product({ params }: { params: Params }) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.BASE_URL}/api/products/?id=${slug}`
  );
  const data: Product = await response.json();

  if (!response.ok) {
    return (
      <ProductModal>
        <div className="text-center py-10 text-gray-700">
          Product not found.
        </div>
      </ProductModal>
    );
  }

  return (
    <ProductModal>
      <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <img
            src={data.large_image}
            alt={data.product_name}
            className="w-full h-auto rounded-lg"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
              {data.product_name}
            </h1>
            <p className="text-gray-600 font-medium text-sm sm:text-lg">
              {data.product_description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-[#E27210]">
                ${data.price}
              </span>
              <span className="text-green-500 text-xs sm:text-sm">
                ({data.quantity} in stock)
              </span>
            </div>

            <p className="text-[10px] bg-gray-200 w-fit rounded p-1 mt-2 sm:text-sm">
              Category: {data.product_category}
            </p>
            <div className="mt-2">
              <AddToCart
                product_name={data.product_name}
                product_image={data.product_image}
                product_id={data.product_id}
                price={data.price}
              />
            </div>
          </div>
        </div>
      </main>
    </ProductModal>
  );
}

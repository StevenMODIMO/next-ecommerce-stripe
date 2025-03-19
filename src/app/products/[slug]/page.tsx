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
        <div className="flex flex-col gap-4">
          <img
            src={data.large_image}
            alt={data.product_name}
            className="w-full h-auto rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              {data.product_name}
            </h1>
            <p className="text-gray-700 mt-2">{data.product_description}</p>

            <div className="mt-4">
              <span className="text-lg font-bold text-[#23b142]">
                ${data.price}
              </span>
              <span className="ml-3 text-gray-600">
                ({data.quantity} in stock)
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Category: {data.product_category}
            </p>
            <div className="mt-6">
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

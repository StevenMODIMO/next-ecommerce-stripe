interface Product {
  product_id: string;
  product_name: string;
  product_description: string;
  product_category: string;
  price: string;
  quantity: number;
  product_image: string;
  large_image: string;
  create_at: string;
}

export default function Banner() {
  return (
    <div className="pb-8 w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <header>Promotion Banner</header>
      </div>
    </div>
  );
}

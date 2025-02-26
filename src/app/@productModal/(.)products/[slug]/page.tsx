import ProductModal from "@/components/ProductModal";

type Params = Promise<{ slug: string }>;

function convertSlugToProductName(slug: string): string {
  return slug
    .split("-")
    .map((word, index, array) => {
      if (word.includes("(") && word.includes(")")) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  return {
    title: convertSlugToProductName(slug),
  };
}

export default async function Product({ params }: { params: Params }) {
  const { slug } = await params;
  const productName = convertSlugToProductName(slug);

  return (
    <ProductModal>
      <main>
        {productName}
      </main>
    </ProductModal>
  );
}

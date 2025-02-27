type Params = Promise<{ slug: string }>;

export default async function Product({ params }: { params: Params }) {
  const { slug } = await params;

  return <main>{slug}</main>;
}

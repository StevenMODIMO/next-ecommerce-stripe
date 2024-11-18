import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Product from "@/models/Product";

await dbConnect();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const product = await Product.findOne({ _id: id });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error);
  }
}

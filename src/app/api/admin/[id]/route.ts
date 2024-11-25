import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Product from "@/models/Product";

await dbConnect();

type Params = Promise<{ id: string }>;

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { id } = await params;

  try {
    const product = await Product.findOne({ _id: id });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  const { id } = await params;
  const body = await req.json();

  return NextResponse.json(body);
}

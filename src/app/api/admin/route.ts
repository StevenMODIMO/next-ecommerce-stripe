import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { put } from "@vercel/blob";

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.formData();

  const productName = body.get("productName");
  const description = body.get("description");
  const category = body.get("category");
  const quantity = body.get("quantity");
  const price = body.get("price");
  const file = body.get("file") as File | null;

  let fileUrl = null;

  if (file) {
    const uploadResult = await put(file.name, file, {
      access: "public",
    });
    fileUrl = uploadResult.url;
  }

  return NextResponse.json({
    productName,
    description,
    category,
    quantity,
    price,
    fileUrl,
  });
}

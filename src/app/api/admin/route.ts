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
    // Upload the file to Vercel Blob
    const uploadResult = await put(file.name, file, {
      access: "public", // Optional: set the access level
    });
    fileUrl = uploadResult.url; // Get the URL of the uploaded file
  }

  return NextResponse.json({
    productName,
    description,
    category,
    quantity,
    price,
    fileUrl, // Include the file URL in the response
  });
}

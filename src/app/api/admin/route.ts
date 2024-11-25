import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import Product from "@/models/Product";
import { put, BlobAccessError } from "@vercel/blob";

await dbConnect();

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams;
  const category = url.get("category");
  try {
    if (category) {
      const products = await Product.find({ category }).exec();
      return NextResponse.json(products);
    } else {
      const categories = [
        "electronics",
        "fashion",
        "home-living",
        "transport",
        "cosmetics",
      ];

      const pipeline = [
        {
          $match: { category: { $in: categories } },
        },
        {
          $group: {
            _id: "$category",
            products: { $push: "$$ROOT" },
          },
        },
        {
          $project: {
            category: "$_id",
            products: { $slice: ["$products", 1] },
          },
        },
        { $unwind: "$products" },
        {
          $replaceRoot: { newRoot: "$products" },
        },
        { $limit: 10 },
      ];

      const groupedProducts = await Product.aggregate(pipeline);

      const products = groupedProducts.slice(0, 10);
      return NextResponse.json(products);
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.formData();

  const productName = body.get("productName");
  const description = body.get("description");
  const category = body.get("category");
  const quantity = body.get("quantity");
  const price = body.get("price");
  const file = body.get("file") as File;

  try {
    const blob = await put(file.name, file, { access: "public" });
    const fileUrl = blob.url;
    const product = await Product.create({
      productName,
      description,
      category,
      quantity,
      price,
      fileUrl,
    });
    return NextResponse.json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    if (error instanceof BlobAccessError) {
      return NextResponse.json({ error });
    } else {
      throw error;
    }
  }
}

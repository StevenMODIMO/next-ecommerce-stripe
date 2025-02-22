import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const products = await query("SELECT DISTINCT ON (product_category) * FROM products ORDER BY product_category, created_at DESC");
    return NextResponse.json(products.rows);
  } catch (error) {
    return NextResponse.json(error);
  }
}

import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  try {
    if (id) {
      const product = await query(
        "SELECT * FROM products WHERE product_id = $1",
        [id]
      );
      return NextResponse.json(product.rows[0]);
    } else {
      const products = await query(
        "SELECT DISTINCT ON (product_category) * FROM products ORDER BY product_category, created_at DESC"
      );
      return NextResponse.json(products.rows);
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

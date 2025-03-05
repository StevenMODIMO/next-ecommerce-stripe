import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const banner = searchParams.get("banner");

  // Capture multiple categories from the query string
  const categories = searchParams.getAll("category"); // Will return an array

  try {
    // Get item by id
    if (id) {
      const product = await query(
        "SELECT * FROM products WHERE product_id = $1",
        [id]
      );
      return NextResponse.json(product.rows[0]);
    }

    // Get the banner item
    if (banner === "true") {
      const bannerProduct = await query(
        "SELECT * FROM products WHERE product_name = 'Play station 5 (PS5)';"
      );
      return NextResponse.json(bannerProduct.rows[0]);
    }

    // Filter by selected categories
    if (categories.length > 0) {
      // Build a dynamic query using the IN clause
      const placeholders = categories.map((_, i) => `$${i + 1}`).join(", ");
      const queryText = `
        SELECT * FROM products 
        WHERE product_category IN (${placeholders}) 
        ORDER BY created_at DESC
      `;

      const filteredProducts = await query(queryText, categories);
      return NextResponse.json(filteredProducts.rows);
    }

    // Default: Fetch distinct products by category
    const products = await query(
      "SELECT DISTINCT ON (product_category) * FROM products ORDER BY product_category, created_at DESC"
    );
    return NextResponse.json(products.rows);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

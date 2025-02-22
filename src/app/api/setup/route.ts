import { NextResponse } from "next/server";
import { query } from "@/lib/db"; // Adjust path if needed

export async function GET() {
  const sql = `
  CREATE TABLE IF NOT EXISTS products (
    product_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_description TEXT,
    product_category VARCHAR(100),
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    product_image TEXT,
    large_image TEXT
  );
  
  `;

  try {
    await query(sql);
    return NextResponse.json({ message: "Table created successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create table" },
      { status: 500 }
    );
  }
}

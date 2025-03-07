import { NextResponse } from "next/server";
import { query } from "@/lib/db"; // Adjust the path if necessary

export async function GET() {
  const sql = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto"; -- Ensure UUID support
    CREATE TABLE IF NOT EXISTS users (
      user_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      avatar TEXT, -- Image URL from Vercel Blob
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL, -- Bcrypt-hashed password
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await query(sql);
    return NextResponse.json({ message: "Users table created successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create table" },
      { status: 500 }
    );
  }
}

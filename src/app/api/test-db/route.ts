import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const result = await query("SELECT NOW()");
    console.log("Database response:", result.rows[0]);
    return NextResponse.json({ success: true, time: result.rows[0] });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(error);
  }
}

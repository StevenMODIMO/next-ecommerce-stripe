import { query } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const users = await query("SELECT * FROM users");
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(req: NextRequest) {}

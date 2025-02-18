import { query } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const q = searchParams.get("query");
  let results;

  try {
    if (q) {
      results = await query("SELECT * FROM users WHERE name = $1", [q]);
    } else {
      results = await query("SELECT * FROM users");
    }
    return NextResponse.json(results.rows);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  try {
    const newUser = await query(
      "INSERT INTO users (name) VALUES ($1) RETURNING *",
      [name]
    );
    return NextResponse.json({ message: "User added", user: newUser.rows[0] });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const q = searchParams.get("query");
  const { name } = await req.json()
  try {
    const updatedUser = await query(
      "UPDATE users SET name = $1 WHERE name = $2 RETURNING *",
      [name,q]
    );
    return NextResponse.json({
      message: "User updated",
      user: updatedUser.rows[0],
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const q = searchParams.get("query");
  try {
    const deletedUser = await query(
      "DELETE FROM users WHERE name = $1 RETURNING *",
      [q]
    );
    return NextResponse.json({
      message: "User deleted",
      user: deletedUser.rows[0],
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

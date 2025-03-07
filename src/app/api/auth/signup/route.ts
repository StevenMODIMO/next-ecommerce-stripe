import { NextResponse, NextRequest } from "next/server";
import { query } from "@/lib/db";
import { genSalt, hash } from "bcrypt";
import { isEmail, isStrongPassword } from "validator";
import { put, del } from "@vercel/blob";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const avatar = formData.get("avatar") as File;

  if (!email || !password) {
    return NextResponse.json({ error: "All fields must be filled" });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" });
  }

  if (!isStrongPassword(password)) {
    return NextResponse.json({
      error: "Password must contain letters, numbers and characters",
    });
  }

  const exists = await query("SELECT * FROM users WHERE email=$1", [email]);

  if ((exists.rowCount ?? 0) > 0) {
    return NextResponse.json({ error: "Email already in use" });
  }

  const salt = await genSalt();
  const hashed = await hash(password, salt);

  let avatarUrl = null;

  if (avatar instanceof File) {
    try {
      const { url } = await put(`avatars/${avatar.name}`, avatar, {
        access: "public",
      });
      avatarUrl = url;
    } catch (error) {
      return NextResponse.json(error);
    }
  }

  try {
    const newUser = await query(
      "INSERT INTO users(email, password, avatar) VALUES($1,$2,$3) RETURNING user_id, avatar, email, password",
      [email, hashed, avatarUrl]
    );
    return NextResponse.json({
      message: "User added successfully",
      user: newUser.rows[0],
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const email = searchParams.get("email");

  try {
    const deletedUser = await query(
      "DELETE FROM users WHERE email=$1 RETURNING user_id, avatar, email, password",
      [email]
    );
    const image = deletedUser.rows[0].avatar;
    if (image) await del(image);
    return NextResponse.json({ message: "User deleted" });
  } catch (error) {
    return NextResponse.json(error);
  }
}

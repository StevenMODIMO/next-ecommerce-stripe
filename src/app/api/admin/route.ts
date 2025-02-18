import { query } from "@/lib/db"; // Ensure this function is properly set up for SQL queries
import { NextResponse, NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid"; // Only used for the image filename
import { put } from "@vercel/blob";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const product_name = formData.get("product_name") as string;
    const product_description = formData.get("product_description") as string;
    const price = parseFloat(formData.get("price") as string);
    const quantity = parseInt(formData.get("quantity") as string, 10);
    const product_category = formData.get("product_category") as string;
    const product_image = formData.get("product_image") as File;

    // Validate required fields
    if (
      !product_name ||
      !product_description ||
      isNaN(price) ||
      isNaN(quantity) ||
      !product_category
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    let imageUrl = null;
    if (product_image instanceof File) {
      try {
        const imageUUID = uuidv4(); // Generate a unique filename
        const fileExtension = product_image.name.split(".").pop(); // Get file extension
        const uniqueFileName = `quick-cart/${imageUUID}.${fileExtension}`; // Use UUID for filename

        const { url } = await put(uniqueFileName, product_image, {
          access: "public",
        });
        imageUrl = url;
      } catch (error) {
        console.error("Image upload failed:", error);
        return NextResponse.json(
          { error: "Image upload failed" },
          { status: 500 }
        );
      }
    }

    const insertQuery = `
      INSERT INTO products (product_name, product_description, price, quantity, product_image, product_category)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING product_id;
    `;

    const result = await query(insertQuery, [
      product_name,
      product_description,
      price,
      quantity,
      imageUrl,
      product_category,
    ]);

    const product_id = result.rows[0].product_id; // Get the generated UUID from PostgreSQL

    return NextResponse.json({
      success: true,
      message: "Product added successfully",
      product: {
        product_id,
        product_name,
        product_description,
        price,
        quantity,
        product_image: imageUrl,
        product_category,
      },
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

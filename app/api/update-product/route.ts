import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { productId, title, description, price, image, category } =
    await request.json();

  try {
    if (!productId || !title || !description || !price || !image || !category) {
      throw new Error(
        "productId, title, description, price and image are required"
      );
    }

    await sql`UPDATE products SET title = ${title}, description = ${description}, price = ${price}, image = ${image}, category = ${category} WHERE id = ${productId};`;
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

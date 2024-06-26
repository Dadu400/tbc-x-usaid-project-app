import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const { title, description, price, image, category, userId } =
    await request.json();

  try {
    if (!title || !description || !price || !image || !category || !userId) {
      throw new Error("title, description, price and image are required");
    }
    await sql`INSERT INTO products (title, description, price, image, category, userid, hidden) VALUES (${title}, ${description}, ${price}, ${image}, ${category}, ${userId}, false);`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  return NextResponse.json({ success: true }, { status: 200 });
}

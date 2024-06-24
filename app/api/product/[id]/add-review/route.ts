import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/");
  const productId = segments[segments.length - 2];

  const { userId, rating, comment } = await request.json();
  if (!productId || !userId || !rating || !comment) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    await sql`
      INSERT INTO reviews (product_id, user_id, rating, comment, added_on)
      VALUES (${productId}, ${userId}, ${rating}, ${comment}, NOW())
    `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

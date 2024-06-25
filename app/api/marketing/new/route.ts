import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const products =
      await sql`SELECT * FROM products WHERE hidden = false ORDER BY id DESC LIMIT 5`;
    return NextResponse.json({ products: products.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

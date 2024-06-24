import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { q, category, priceFrom, priceTo } = await req.json();

    const products = await sql`
            SELECT * FROM products
            WHERE title ILIKE ${q ? `%${q}%` : "%%"}
            AND category ILIKE ${category ? `%${category}%` : "%%"}
        `;
    if (priceFrom) {
      products.rows = products.rows.filter(
        (product) => Number(product.price) >= Number(priceFrom)
      );
    }
    if (priceTo) {
      products.rows = products.rows.filter(
        (product) => Number(product.price) <= Number(priceTo)
      );
    }

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

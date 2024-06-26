import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const productsResult =
      await sql`SELECT * FROM products WHERE hidden = false`;
    const products = productsResult.rows;

    for (const product of products) {
      // select average of rating in "reviews" table
      const ratingResult =
        await sql`SELECT AVG(rating) FROM reviews WHERE product_id = ${product.id}`;
      const rating = ratingResult.rows;

      product.rating = rating[0].avg;
    }

    products.sort((a, b) => b.rating - a.rating);

    return NextResponse.json(
      { products: products.slice(0, 5) },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

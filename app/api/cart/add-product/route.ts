import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

type Products = {
  [key: string]: number;
};

export const revalidate = 0;

export async function PUT(req: NextRequest) {
  try {
    revalidatePath("/cart");
    const { userId, productId, quantity } = await req.json();
    const result = await sql`
      SELECT products FROM carts
      WHERE user_id = ${Number(userId)}
    `;
    
    let products: Products = {};

    if (result.rowCount > 0) {
      products = result.rows[0].products || {};
    }
    if (typeof products === "string") {
      products = JSON.parse(products);
    }

    if (products[productId]) {
      products[productId] += quantity;
    } else {
      products[productId] = quantity;
    }

    const updatedCart = await sql`
      UPDATE carts
      SET products = ${JSON.stringify(products)}::jsonb
      WHERE user_id = ${Number(userId)}
      RETURNING *
    `;

    return NextResponse.json({ updatedCart }, { status: 200 });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

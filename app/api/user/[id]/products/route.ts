import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/");
  const userId = segments[segments.length - 2];

  try {
    const productsResult =
      await sql`select * from products where userid = ${userId} and hidden = false order by added_on desc`;
    const products = productsResult.rows;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

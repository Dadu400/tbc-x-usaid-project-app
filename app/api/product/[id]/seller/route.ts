import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/");
  const productId = segments[segments.length - 2];

  // select userid from product where id = productId
  // select name, surname, phone, imageurl from users where id = userid

  const userIdFetchResponse =
    await sql`SELECT userid FROM products WHERE id = ${productId}`;
  const userId = userIdFetchResponse.rows[0].userid;

  const userDataResponse =
    await sql`SELECT name, surname, phone, imageurl FROM users WHERE id = ${userId}`;

  return NextResponse.json({ user: userDataResponse.rows[0] }, { status: 200 });
}

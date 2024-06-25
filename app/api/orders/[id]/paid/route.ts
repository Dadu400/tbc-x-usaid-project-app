import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/");
  const orderId = segments[segments.length - 2];

  try {
    await sql`
      UPDATE orders SET status = 'გზაშია' WHERE id = ${orderId}
    `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ message: "Order paid" }, { status: 200 });
}

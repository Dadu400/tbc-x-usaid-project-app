import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  try {
    if (!id) throw new Error("ID is required");

    await sql`UPDATE products SET hidden = true WHERE id = ${id}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  const { id, name, email, age } = await request.json();

  try {
    if (!id) throw new Error("ID is required");

    await sql`
      UPDATE users
      SET name = ${name}, email = ${email}, age = ${age}
      WHERE id = ${id}
    `;

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users`;
  return NextResponse.json({ users }, { status: 200 });
}

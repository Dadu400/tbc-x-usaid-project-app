import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const { id, email, name, surname, address, phone, imageUrl } =
    await request.json();

  try {
    if (
      !name ||
      !email ||
      !name ||
      !surname ||
      !address ||
      !phone ||
      !imageUrl
    ) {
      throw new Error("name, email and age are required");
    }
    await sql`INSERT INTO users (id, email, name, surname, address, phone, imageUrl) VALUES (${id}, ${email}, ${name}, ${surname}, ${address}, ${phone}, ${imageUrl},);`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}

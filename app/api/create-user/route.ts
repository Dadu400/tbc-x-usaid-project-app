// import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { QueryResult, sql } from "@vercel/postgres";
// import jwt from "jsonwebtoken";

export const revalidate = 0;

export async function POST(request: Request) {
  const { email, password, name, surname, address, phone, imageUrl } =
    await request.json();

  const isValid = isParameterValid(
    email,
    password,
    name,
    surname,
    address,
    phone,
    imageUrl
  );
  if (!isValid) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  const existingUsers: QueryResult =
    await sql`SELECT * FROM users WHERE email = ${email}`;
  if (existingUsers.rowCount > 0) {
    return NextResponse.json(
      { error: "User with that email already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await sql`INSERT INTO users (email, password, name, surname, address, phone, imageUrl) VALUES (${email}, ${hashedPassword}, ${name}, ${surname}, ${address}, ${phone}, ${imageUrl})`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  return NextResponse.json({ success: true }, { status: 200 });
}

function isParameterValid(
  email: string,
  password: string,
  name: string,
  surname: string,
  address: string,
  phone: string,
  imageUrl: string
): boolean {
  if (
    !email ||
    !password ||
    !name ||
    !surname ||
    !address ||
    !phone ||
    !imageUrl
  ) {
    return false;
  }
  return true;
}

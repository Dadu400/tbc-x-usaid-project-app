import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { SignJWT } from "jose";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(request: NextRequest) {
  const { email, imageUrl, name, surname, address, phone } =
    await request.json();

  const isValid = isParameterValid(email, name, surname, address, phone);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  await sql`UPDATE users SET name = ${name}, surname = ${surname}, imageurl = ${imageUrl}, address = ${address}, phone = ${phone} WHERE email = ${email}`;

  const queryResult = await sql`SELECT * FROM users WHERE email = ${email}`;
  const user = queryResult.rows[0];
  const jwtToken = await new SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1w")
    .sign(key);

  return NextResponse.json({ success: true, token: jwtToken }, { status: 200 });
}

function isParameterValid(
  email: string,
  name: string,
  surname: string,
  address: string,
  phone: string
): boolean {
  if (!email || !name || !surname || !address || !phone) {
    return false;
  }
  return true;
}

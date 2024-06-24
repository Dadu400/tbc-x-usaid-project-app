import { QueryResult, sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const isValid = isParameterValid(email, password);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  const existingUsers: QueryResult =
    await sql`SELECT * FROM users WHERE email = ${email}`;
  if (existingUsers.rowCount === 0) {
    return NextResponse.json(
      { error: "User with that email does not exist" },
      { status: 400 }
    );
  }

  const user = existingUsers.rows[0];
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ error: "Invalid password" }, { status: 400 });
  }

  const jwtToken = await new SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1w")
    .sign(key);

  return NextResponse.json({ token: jwtToken });
}

const isParameterValid = (email: string, password: string): boolean => {
  if (!email || !password) {
    return false;
  }
  return true;
};

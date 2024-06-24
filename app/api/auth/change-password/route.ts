import { NextResponse } from "next/server";
import { QueryResult, sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { email, oldPassword, newPassword, confirmNewPassword } =
    await request.json();

  const isValid = isParameterValid(
    email,
    oldPassword,
    newPassword,
    confirmNewPassword
  );
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
  const passwordMatch = await bcrypt.compare(oldPassword, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ error: "Invalid password" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await sql`UPDATE users SET password = ${hashedPassword} WHERE email = ${email}`;

  return NextResponse.json({ message: "Password changed successfully" });
}

const isParameterValid = (
  email: string,
  old_password: string,
  new_password: string,
  confirm_password: string
): boolean => {
  if (!email || !old_password || !new_password || !confirm_password) {
    return false;
  }
  return true;
};

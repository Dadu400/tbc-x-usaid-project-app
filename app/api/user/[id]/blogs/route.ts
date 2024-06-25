import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/");
  const userId = segments[segments.length - 2];

  try {
    const blogsResult =
      await sql`SELECT * FROM blogs WHERE user_id = ${userId} ORDER BY added_on DESC`;
    const blogs = blogsResult.rows;

    for (let i = 0; i < blogs.length; i++) {
      const userResult =
        await sql`SELECT * FROM users WHERE id = ${blogs[i].user_id}`;
      blogs[i].user = userResult.rows[0];
    }

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

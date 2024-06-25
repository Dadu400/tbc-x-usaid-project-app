import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const blogsResult = await sql`SELECT * FROM blogs`;
    const blogs = blogsResult.rows;

    for (let i = 0; i < blogs.length; i++) {
      const userResult =
        await sql`SELECT * FROM users WHERE id = ${blogs[i].user_id}`;
      blogs[i].user = userResult.rows[0];
    }

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  console.log("RECEIVED REQUEST");
  const { title, text, imageurl, user, added_on, average_read_time } =
    await request.json();

  try {
    console.log("Inserting blog into database");
    sql`INSERT INTO blogs (title, text, imageurl, user_id, added_on, average_read_time) VALUES (${title}, ${text}, ${imageurl}, ${user.id}, ${added_on}, ${average_read_time})`;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

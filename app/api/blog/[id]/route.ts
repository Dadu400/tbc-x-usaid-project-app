import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const productId = request.nextUrl.pathname.replace("/api/blog/", "");
  let { title, text, imageurl, user, added_on, average_read_time } =
    await request.json();

  if (!title || !text || !imageurl || !user || !added_on) {
    return new Response("Missing required fields", { status: 400 });
  }

  average_read_time = Math.ceil(text.split(" ").length / 200);

  try {
    await sql`UPDATE blogs SET title = ${title}, text = ${text}, imageurl = ${imageurl}, user_id = ${user.id}, added_on = ${added_on}, average_read_time = ${average_read_time} WHERE id = ${productId}`;
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

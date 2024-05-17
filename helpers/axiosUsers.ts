import axios from "axios";
import { revalidateTag } from "next/cache";
import { sql } from "@vercel/postgres";
import { getEnvironment } from "./getEnvironment";

export interface User {
  id?: number;
  name: string;
  email: string;
  age: string;
}

export const BASE_URL = getEnvironment();

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/get-users`);
    return response.data.users.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export async function createUser(name: string, email: string, age: string) {
  await sql`INSERT INTO users (name, email, age) VALUES (${name}, ${email}, ${age} )`;
  revalidateTag("users_list");
}

export async function deleteUser(id: number) {
  await sql`DELETE FROM users WHERE id = ${Number(id)}`;
  {
    ("use server");
    revalidateTag("users_list");
  }
}

export async function updateUser(
  id: string,
  name: string,
  email: string,
  age: string
) {
  await sql`
  UPDATE users
  SET name = ${name}, email = ${email}, age = ${age}
  WHERE id = ${id}
`;
{
  ("use server");
  revalidateTag("users_list");
}
}

import axios from "axios";
import { revalidateTag, unstable_cache } from "next/cache";
import { sql } from "@vercel/postgres";

export interface User {
  id?: number;
  name: string;
  email: string;
  age: string;
}

export const BASE_URL = "http://localhost:3000";

export const getUsers = unstable_cache(
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/get-users`);
      return response.data.users.rows;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },
  ["users_list"],
  { tags: ["users_list"] }
);

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
  return await fetch(`${BASE_URL}/api/create-users`, {
    method: "PUT",
    body: JSON.stringify({ id, name, email, age }),
  });
}

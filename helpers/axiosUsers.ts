import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";

export interface User {
  id?: number;
  name: string;
  email: string;
  age: string;
}

export const getUsers = async () => {
  // try {
  //   const response = await axios.get(process.env.NEXT_PUBLIC_VERCEL_URL + '/api/get-users');
  //   return response.data.users.rows;
  // } catch (error) {
  //   console.error("Error fetching users:", error);
  //   throw error;
  // }
};

export async function createUser(
  id: number,
  name: string,
  email: string,
  surname: string,
  address: string,
  phone: string,
  imageUrl: string
) {
  await sql`INSERT INTO users (id, email, name, surname, address, phone, imageUrl) VALUES (${id}, ${email}, ${name}, ${surname}, ${address}, ${phone}, ${imageUrl});`;
  revalidateTag("users_list");
}

// export async function uploadImage(image: File) {
//   try {
//     const response = await put(
//       process.env.NEXT_PUBLIC_VERCEL_URL + "/api/upload-image",
//       image
//     );
//     return response.data.url;
//   } catch (error) {
//     console.error("Error uploading image:", error);
//   }
// }

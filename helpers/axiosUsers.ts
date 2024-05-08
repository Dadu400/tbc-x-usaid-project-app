import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
  age: string;
}

export const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/api/get-users`);
    return response.data.users.rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

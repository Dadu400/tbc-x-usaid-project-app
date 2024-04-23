"use server";

import LoginForm from "@/components/auth/LoginForm";
import { AUTH_COOKIE_KEY } from "@/contants";
import { Login } from "@/app/actions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function LoginPage() {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get(AUTH_COOKIE_KEY);

  if (cookie) {
    redirect("/");
  }

  const handleLogin = async (username, password) => {
    "use server";
    await Login(username, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-black">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}

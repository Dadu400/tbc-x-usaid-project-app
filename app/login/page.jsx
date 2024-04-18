"use server";

import  LoginForm  from "@/app/components/auth/LoginForm";
import { AUTH_COOKIE_KEY } from "@/contants";
import { Login } from "@/app/actions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function LoginPage() {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get(AUTH_COOKIE_KEY);

  if (cookie) {
    redirect("/home");
  }

  const handleLogin = async (username, password) => {
    "use server"
    await Login(username, password);
  };
  
  return (

      <LoginForm handleLogin={handleLogin} />

  );
}



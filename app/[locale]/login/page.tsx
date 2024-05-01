"use server";

import LoginForm from "../../../components/auth/LoginForm";
import { AUTH_COOKIE_KEY } from "../../../contants";
import { Login } from "../../actions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import LocaleSwitcher from "../../../components/header/LocaleSwitcher";

export default async function LoginPage() {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get(AUTH_COOKIE_KEY);

  if (cookie) {
    redirect("/");
  }

  const handleLogin = async (username: string, password: string) => {
    "use server";
    await Login(username, password);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FD8024] dark:bg-black">
      <div className="mb-2">
      <LocaleSwitcher />
      </div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}

"use server";

import LoginForm from "../../../components/auth/LoginForm";
import { AUTH_COOKIE_KEY } from "../../../contants";
import { Login } from "../../../actions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import LocaleSwitcher from "../../../components/header/LocaleSwitcher";
import ThemeSwitcher from "../../../components/header/ThemeSwitcher";
import ParticlesBackground from "../../../components/particles/ParticlesBackground";
import SuperMan from "../../../public/superman.svg";
import Image from "next/image";
import SignUpSuggestion from "../../../components/auth/SignUpSuggestion";

export default async function LoginPage() {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get(AUTH_COOKIE_KEY);

  if (cookie) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen dark:bg-black">
      <ParticlesBackground />
      <div className="flex flex-col justify-center items-center mt-[-80px]">
        <Image src={SuperMan} alt="Company Logo" width={80} height={80} className="mb-[25px]" />
        <LoginForm />
        <SignUpSuggestion />
      </div>
    </div>
  );
}

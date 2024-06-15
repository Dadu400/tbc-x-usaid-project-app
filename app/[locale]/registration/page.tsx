"use server";

import ParticlesBackground from "../../../components/particles/ParticlesBackground";
import SuperMan from "../../../public/superman.svg";
import Image from "next/image";
import UserRegistrationForm from "../../../components/registration/UserRegistrationForm";
import SignInSuggestion from "../../../components/auth/SignInSuggestion";

export default async function RegistrationPage() {

  return (
    <div className="flex justify-center items-center h-screen dark:bg-black">
      <ParticlesBackground />
      <div className="flex flex-col justify-center items-center mt-[-80px]">
        <Image src={SuperMan} alt="Company Logo" width={80} height={80} className="mb-[25px]" />
        <UserRegistrationForm />
        <SignInSuggestion />
      </div>
    </div>
  );
}

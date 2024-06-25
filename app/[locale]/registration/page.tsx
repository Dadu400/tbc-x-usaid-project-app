import ParticlesBackground from "../../../components/particles/ParticlesBackground";
import UserRegistrationForm from "../../../components/registration/UserRegistrationForm";
import SignInSuggestion from "../../../components/auth/SignInSuggestion";

export default async function RegistrationPage() {

  return (
    <div className="flex justify-center items-center h-screen dark:bg-black">
      <ParticlesBackground />
      <div className="flex flex-col justify-center items-center mt-[-80px]">
        <UserRegistrationForm />
        <SignInSuggestion />
      </div>
    </div>
  );
}

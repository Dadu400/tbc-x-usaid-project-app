import Link from 'next/link';
import { useTranslations } from 'next-intl';

function SignInSuggestion() {
    const t = useTranslations("SignIn");
    return (
        <div className="px-8 py-4 bg-white dark:bg-[#1D2024] text-md rounded shadow-2xl w-full mt-[20px] flex justify-center items-center dark:border-[#ffffff1f]">
            {t("quest")}  <Link href="/login" className="ml-1.5 font-semibold text-[#EC6652] ">{t("suggest")}</Link>
        </div>
    );
}

export default SignInSuggestion;
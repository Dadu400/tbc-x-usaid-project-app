import Link from 'next/link';
import { useTranslations } from 'next-intl';

function SignInSuggestion() {
    const t = useTranslations("SignIn");
    return (
        <div className="px-8 py-4 bg-white text-md rounded shadow-2xl w-full mt-[20px] flex justify-center items-center">
            {t("quest")}  <Link href="/login" className="ml-1.5 font-semibold text-red">{t("suggest")}</Link>
        </div>
    );
}

export default SignInSuggestion;
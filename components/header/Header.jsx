import Image from "next/image";
import LegoLogo from "../icons/LEGO_logo.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { Logout } from "@/app/actions";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

async function Header() {
  const locale = useLocale();
  const t = await getTranslations("navigation")
  const handleLogout = async () => {
    "use server";
    await Logout()
  }

  return (
    <header className="bg-yellow-400 w-full px-8 py-2">
      <div className="flex items-center justify-between">
        <div>
          <Link href={`${locale}/home`}>
            <Image src={LegoLogo} alt="LEGO logo" width={50} height={50} />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li className="uppercase font-bold text-base">
              <Link href={`${locale}/home`}>{t("home")}</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href={`${locale}/blogs`}>{t("blogs")}</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href={`${locale}/profile`}>{t("profile")}</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href={`${locale}/contactUs`}>{t("contactus")}</Link>
            </li>
            <li className="uppercase font-bold text-base">
             <ThemeSwitcher />
            </li>
            <li className="uppercase font-bold text-base">
             <LogoutButton handleLogout={handleLogout} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

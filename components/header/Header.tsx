import Image from "next/image";
import LegoLogo from "../icons/LEGO_logo.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { Logout } from "../../actions";
import ThemeSwitcher from "./ThemeSwitcher";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "./LocaleSwitcher";

async function Header() {
  const t = await getTranslations("navigation")
  const handleLogout = async () => {
    "use server";
    await Logout();
  }

  return (
    <header className="bg-yellow-400 w-full px-8 py-2">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/home">
            <Image src={LegoLogo} alt="LEGO logo" width={50} height={50} />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li className="uppercase font-bold text-base">
              <Link href="/home">{t("home")}</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href="/blogs">{t("blogs")}</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href="/profile">{t("profile")}</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href="/contactUs">{t("contactus")}</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href="/admin">{t("admin")}</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <ThemeSwitcher />
            </li>
            <li className="uppercase font-bold text-base">
              <LocaleSwitcher />
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

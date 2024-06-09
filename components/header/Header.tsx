import Image from "next/image";
import SuperMan from "../../public/superman.svg";
import Link from "next/link";
// import { Logout } from "../../actions";
import { getTranslations } from "next-intl/server";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CartIcon from "./CartIcon";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LocaleSwitcher from "./LocaleSwitcher";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { cookies } from "next/headers";
import ThemeSwitcher from "./ThemeSwitcher";

async function Header() {
  const t = await getTranslations("navigation");

  const authCookie = cookies().get("auth");

  return (
    <header className="border-b-2 border-[#00000026] dark:border-[#ffffff26] bg-[#F9F9FF] dark:bg-[#121B18] dark-[#] w-full px-8 py-3 sticky top-0 z-10">
      <div className="w-[60vw] mx-auto flex items-center justify-between">
        <div className="flex items-center font-bold text-lg w-[200px]">
          <Link href="/">
            <Image src={SuperMan} alt="Company Logo" width={50} height={50} />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <ul className="flex items-center gap-5">
                <LocaleSwitcher />
                <ThemeSwitcher />
                <CartIcon />
                <Link href={"/blogs"}>
                  <FeedOutlinedIcon />
                </Link>
                {authCookie && <li>
                  <Link href={"/profile"}>
                    <PermIdentityIcon fontSize="medium" />
                  </Link>
                </li>}
              </ul>
            </li>
            <li className="uppercase font-medium text-base">
              <Link href={authCookie ? "/logout" : "/login"}>
                <button className="flex w-[50px] items-center justify-center gap-2 border-[1.5px] border-[#0000001a] dark:border-[#ffffff26] hover:bg-[#00000014] text-sm px-4 py-2 rounded-[10px] rounded-tr-[10px] rounded-br-[10px]">
                  {authCookie ? <ExitToAppIcon fontSize="small" /> : <PermIdentityIcon />}
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

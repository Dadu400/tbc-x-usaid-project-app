import Image from "next/image";
import SuperMan from "../../public/superman.svg";
import Link from "next/link";
import { GetSession } from "../../actions";
import HeaderNavbar from "./HeaderNavbar";
import BurgerMenu from "./BurgerMenu";

async function Header() {
  const session = await GetSession();
  const isAuthenticated = session !== undefined;

  return (
    <header className="border-b-2 border-[#00000026] dark:border-[#ffffff26] bg-[#F9F9FF] dark:bg-[#121B18] dark-[#] w-full px-8 py-3 sticky top-0 z-10">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto flex items-center justify-between">
        <div className="flex items-center font-bold text-lg">
          <Link href="/">
            <Image src={SuperMan} alt="Company Logo" width={50} height={50} />
          </Link>
        </div>
        <HeaderNavbar isAuthencitated={isAuthenticated} session={session} className="hidden lg:flex" />
        <BurgerMenu isLoggedIn={isAuthenticated} session={session} className="flex lg:hidden" />
      </div>
    </header>
  );
}

export default Header;

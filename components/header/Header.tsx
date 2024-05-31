import Image from "next/image";
import SuperMan from "../../public/superman.svg";
import Link from "next/link";
// import { Logout } from "../../actions";
import { getTranslations } from "next-intl/server";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CartIcon from "./CartIcon";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LocaleSwitcher from "./LocaleSwitcher";

async function Header() {
  const t = await getTranslations("navigation");
  // const handleLogout = async () => {
  //   "use server";
  //   await Logout();
  // };

  return (
    <header className="border-b-2 border-[#00000026] bg-[#FEFEFE] w-full px-8 py-3">
      <div className="w-[60vw] mx-auto flex items-center justify-between">
        <div className="flex items-center font-bold text-lg font-['mtavruli'] w-[200px]">
          <Link href="/">
            <Image src={SuperMan} alt="Company Logo" width={50} height={50} />
          </Link>
          {t('superSite')}
        </div>
        <div className="w-[30%] flex items-stretch border-[1.5px] border-red rounded-[6px] bg-white">
          <input placeholder={t('search')} className="border-red outline-none text-black text-sm text-color-[#000000b3] flex-grow rounded-l-[6px] p-[6px] ml-[5px] my-[3px]"></input>
          <div className="bg-red text-white flex items-center px-[8px] cursor-pointer">
            <SearchOutlinedIcon />
          </div>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <LocaleSwitcher />
            </li>
            <li>
              <ul className="flex items-center gap-5">
                <CartIcon />
                <li>
                  <Link href={"/blogs"}>
                    <FeedOutlinedIcon />
                  </Link>
                </li>
                <CartIcon />
              </ul>
            </li>
            <li className="uppercase font-medium text-base">
              <Link href={"/login"}>
                <button className="flex w-[125px] items-center justify-center gap-2 border-[1.5px] border-[#0000001a] hover:border-[#00000014] hover:bg-[#00000014] text-sm px-4 py-2 rounded-[10px] rounded-tr-[10px] rounded-br-[10px]">
                  <PermIdentityIcon style={{}} />
                  {t('login')}
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

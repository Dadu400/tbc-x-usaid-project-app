import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import localFont from '@next/font/local';
import CartIcon from './CartIcon';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocale } from "next-intl";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' });

interface User {
  name: string;
}

interface Session {
  user: User;
}

export interface BurgerMenuDialogProps {
  isLoggedIn: boolean;
  session: Session | null;
  setMenuOpen: (isOpen: boolean) => void;
}

function BurgerMenuDialog ({ isLoggedIn, session, setMenuOpen } : BurgerMenuDialogProps) {
    const locale = useLocale();

  return (
    <div className="navbar fixed top-0 right-0 h-screen w-64 p-6 bg-[#F9F9FF] dark:bg-[#121B18] shadow-lg cursor-normal">
      <div className="flex justify-end mb-5">
        <CloseIcon onClick={() => setMenuOpen(false)} />
      </div>
      {isLoggedIn && session ? (
        <h1>{locale == "en" ? "Hello " : "გამარჯობა "}{session.user.name}! </h1>
      ) : (
        <div className="flex gap-[10px] justify-center items-center">
          <Link href="/login" className="text-sm border p-2 rounded-lg">{locale == "en" ? "Sign In" : "ავტორიზაცია"}</Link>
          <Link href="/register" className="text-sm border p-2 rounded-lg bg-[#EC6652] text-white">{locale == "en" ? "Sign Up" : "რეგისტრაცია"}</Link>
        </div>
      )}
      <div className="flex justify-start gap-[15px] mt-5">
        <div className="flex gap-[10px] justify-center items-center">
          <span className={`text-sm font-semibold ${mtavruli.className}`}>{locale == "en" ? "Theme" : "თემა"}</span>
          <div className="border rounded p-1 shadow-lg">
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start mt-5">
        {isLoggedIn && (
          <Link href="/profile" className="text-sm p-2 flex gap-5">
            <PermIdentityIcon />
            <span>{locale == "en" ? "Profile" : "პროფილი"}</span>
          </Link>
        )}
        <div className="flex flex-col">
          <Link href="/" className="text-sm p-2 flex gap-5">
            <CartIcon session={session} />
            <span>{locale == "en" ? "Cart" : "კალათა"}</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <Link href="/blogs" className="text-sm p-2 flex gap-5">
            <FeedOutlinedIcon />
            <span>{locale == "en" ? "Blogs" : "ბლოგები"}</span>
          </Link>
        </div>
        {isLoggedIn && (
          <Link href="/logout" className="text-sm p-2 flex gap-5">
            <LogoutIcon />
            <span>{locale == "en" ? "Logout" : "გასვლა"}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BurgerMenuDialog;

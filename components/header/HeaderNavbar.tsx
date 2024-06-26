import CartIcon from "./CartIcon";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Link from "next/link";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AuthButton from "./AuthButton";
import { JWTPayload } from "jose";

function HeaderNavbar({ isAuthencitated, session, className }: { isAuthencitated: boolean, session: JWTPayload | undefined, className: string }) {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-3 md:gap-10">
        <li>
          <ul className="flex items-center gap-3 md:gap-5">
            <LocaleSwitcher />
            <ThemeSwitcher />
            <CartIcon session={session} />
            <Link href={"/blogs"}>
              <FeedOutlinedIcon />
            </Link>
            {isAuthencitated &&
              <Link href={"/profile"}>
                <PermIdentityIcon fontSize="medium" />
              </Link>}
          </ul>
        </li>
        <li className="uppercase font-medium text-base">
          <AuthButton session={session} />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
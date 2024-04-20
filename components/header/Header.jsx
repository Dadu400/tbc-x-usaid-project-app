import React from "react";
import Image from "next/image";
import LegoLogo from "../icons/LEGO_logo.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { Logout } from "@/app/actions";
import ThemeSwitcher from "./ThemeSwitcher";

async function Header() {
  const handleLogout = async () => {
    "use server";
    await Logout()
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
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
              <Link href="/">home</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href="/blogs">blogs</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href="/profile">profile</Link>
            </li>
            <li className="uppercase font-bold text-base">
              <Link href="/contactUs">contact us</Link>
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

import React from "react";
import Image from "next/image";
import LegoLogo from "../icons/LEGO_logo.png";
import Link from "next/link";

function Header() {
    return (
        <header className="bg-yellow-400 w-full px-8 py-2">
            <div className="flex items-center justify-between">
                <div>
                    <Link href="/">
                    <Image src={LegoLogo} alt="LEGO logo" width={50} height={50} />
                    </Link>
                </div>
                <nav>
                    <ul className="flex items-center gap-8">
                        <li className="uppercase font-bold text-base">
                            <Link href="/blogs">blogs</Link>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <Link href="/">shop</Link>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <Link href="/profile">profile</Link>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <Link href="/contactUs">contact us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
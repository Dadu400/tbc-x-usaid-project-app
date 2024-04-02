import React from "react";
import Image from "next/image";
import LegoLogo from "../icons/LEGO_logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-yellow-400 w-full px-8 py-2">
            <div className="flex items-center justify-between">
                <div>
                    <Link to="/">
                    <Image src={LegoLogo} alt="LEGO logo" width={50} height={50} />
                    </Link>
                </div>
                <nav>
                    <ul className="flex items-center gap-8">
                    <li className="uppercase font-bold text-base">
                            <Link to="/">home</Link>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <Link to="/Blogs">blogs</Link>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <Link to="/">shop</Link>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <Link to="/profile">profile</Link>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <Link to="/Contacts">contact us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;

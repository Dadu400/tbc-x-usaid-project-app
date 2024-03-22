import React from "react";
import LegoLogo from "../icons/LEGO_logo.svg.png";

function Header() {
    return (
        <header className="bg-yellow-400 w-full px-8 py-2">
            <div className="flex items-center justify-between">
                <div>
                    <a href="###">
                        <img src={LegoLogo} alt="LEGO logo" className="w-14 h-14" />
                    </a>
                </div>
                <nav>
                    <ul className="flex items-center gap-8">
                    <li className="uppercase font-bold text-base">
                            <a href="/">home</a>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <a href="/">shop</a>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <a href="/">discover</a>
                        </li>
                        <li className="uppercase font-bold text-base">
                            <a href="/Contacts">contact us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;

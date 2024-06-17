'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import BurgerMenuDialog from './BurgerMenuDialog';

function BurgerMenu({ isLoggedIn, session, className }) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className={`${className} cursor-pointer`}>
            <MenuIcon onClick={() => setMenuOpen(!isMenuOpen)} />
            {isMenuOpen && (
                <BurgerMenuDialog isLoggedIn={isLoggedIn} session={session} setMenuOpen={setMenuOpen} />
            )}
        </div>
    )
}

export default BurgerMenu;
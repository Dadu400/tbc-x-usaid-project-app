'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import BurgerMenuDialog from './BurgerMenuDialog';

interface User {
    name: string;
  }
  
  interface Session {
    user: User;
  }
  
  interface BurgerMenuProps {
    isLoggedIn: boolean;
    session: Session | null;
    className?: string;
  }

function BurgerMenu({ isLoggedIn, session, className }: BurgerMenuProps) {
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
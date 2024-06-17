
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

function BurgerMenuDialog({ isLoggedIn, session, setMenuOpen }) {
    
    return (
        <div className="navbar fixed top-0 right-0 h-screen w-64 p-6 bg-white shadow-lg cursor-normal">
            <div className="flex justify-end mb-5">
                <CloseIcon onClick={() => setMenuOpen(false)} />
            </div>
            {isLoggedIn ? (
                <h1>Hello, {session.firstName}! </h1>
            ) : (
                <div className="flex gap-[10px] justify-center items-center">
                    <Link href="/login" className="text-sm border p-2 rounded-lg">ავტორიზაცია</Link>
                    <Link href="/register" className="text-sm border p-2 rounded-lg bg-[#EC6652] text-white">რეგისტრაცია</Link>
                </div>
            )}
        </div>
    )
}

export default BurgerMenuDialog;
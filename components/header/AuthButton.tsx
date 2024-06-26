import { Logout } from "../../actions";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { redirect } from "next/navigation";
import LoginIcon from '@mui/icons-material/Login';

export default async function AuthButton({ session }: { session: any }) {
    const isAuthenticated = session !== undefined;

    return (
        <form action={async () => {
            'use server';

            if (isAuthenticated) {
                await Logout();
            } else {
                redirect("/login");
            }
        }}>
            <button type="submit" className="flex w-[50px] items-center justify-center gap-2 border-[1.5px] border-[#0000001a] dark:border-[#ffffff26] hover:bg-[#00000014] text-sm px-4 py-2 rounded-[10px] rounded-tr-[10px] rounded-br-[10px]">
                {isAuthenticated ? <ExitToAppIcon fontSize="small" /> : <LoginIcon fontSize="small" />}
            </button>
        </form>
    );
}
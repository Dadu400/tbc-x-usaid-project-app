import { GetSession, Logout } from "../../actions";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { redirect } from "next/navigation";

export default async function LogoutButton() {
    const session = await GetSession();
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
                {isAuthenticated ? <ExitToAppIcon fontSize="small" /> : <PermIdentityIcon />}
            </button>
        </form>
    );
}
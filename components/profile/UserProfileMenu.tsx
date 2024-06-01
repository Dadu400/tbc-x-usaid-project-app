import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PasswordIcon from '@mui/icons-material/Password';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

function UserProfileMenu({ selectedItem, setSelectedMenuItem }: { selectedItem: string, setSelectedMenuItem: (id: string) => void }) {
    const menuItems = [
        {
            id: "profile",
            icon: <PersonOutlineIcon />,
            title: "ჩემი პროფილი"
        },
        {
            id: "password",
            icon: <PasswordIcon />,
            title: "პაროლი"
        },
        {
            id: "history",
            icon: <HistoryIcon />,
            title: "შეკვეთების ისტორია"
        },
        {
            id: "logout",
            icon: <LogoutIcon />,
            title: "სისტემიდან გასვლა"
        }
    ]

    return (
        <div className="w-full flex-4 flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE]">
            {menuItems.map((item) => (
                <div key={item.id}
                    onClick={() => { setSelectedMenuItem(item.id) }}
                    className={`flex items-center gap-x-3 px-4 py-3 border-b-[1px] transition ease-in-out cursor-pointer ${selectedItem === item.id ? "text-red border-l-[2px] border-l-red rounded-sm" : ""}`}>
                    {item.icon}
                    <span className="text-md font-['mtavruli']">{item.title}</span>
                </div>
            ))}
        </div>
    )
}

export default UserProfileMenu;
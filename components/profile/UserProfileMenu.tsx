import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PasswordIcon from '@mui/icons-material/Password';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Link from 'next/link';

function UserProfileMenu({ selectedItem }: { selectedItem: string }) {
    const menuItems = [
        {
            id: "profile",
            icon: <PersonOutlineIcon />,
            title: "ჩემი პროფილი",
            route: "/profile"
        },
        {
            id: "password",
            icon: <PasswordIcon />,
            title: "პაროლი",
            route: "/profile/password"
        },
        {
            id: "orders",
            icon: <HistoryIcon />,
            title: "შეკვეთების ისტორია",
            route: "/profile/orders"
        },
        {
            id: "products",
            icon: <Inventory2OutlinedIcon />,
            title: "ჩემი პროდუქტები",
            route: "/profile/products"
        },
        {
            id: "blogs",
            icon: <FeedOutlinedIcon />,
            title: "ბლოგები",
            route: "/profile/blogs"
        },
    ]

    return (
        <div className="w-full flex-4 flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE]">
            {menuItems.map((item) => (
                <Link href={item.route} key={item.id}>
                    <div key={item.id}
                        className={`flex items-center gap-x-3 px-4 py-3 border-b-[1px] transition ease-in-out cursor-pointer ${selectedItem === item.id ? "text-red border-l-[2px] border-l-red rounded-sm" : ""}`}>
                        {item.icon}
                        <span className="text-md font-['mtavruli']">{item.title}</span>
                    </div>
                </Link>
            ))}
            <div key={"logout"}
                className={`flex items-center gap-x-3 px-4 py-3 border-b-[1px] transition ease-in-out cursor-pointer`}>
                <LogoutIcon />
                <span className="text-md font-['mtavruli']">სისტემიდან გასვლა</span>
            </div>
        </div>
    )
}

export default UserProfileMenu;
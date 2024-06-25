import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PasswordIcon from '@mui/icons-material/Password';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Link from 'next/link';
import { GetSession } from '../../actions';
import { getTranslations } from 'next-intl/server';
import { User } from '../auth/LoginForm';
import { redirect } from "next/navigation";
import localFont from '@next/font/local';

interface UserProfileMenuProps {
  selectedItem: string;
}

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

async function UserProfileMenu({ selectedItem }: UserProfileMenuProps) {
  const session = await GetSession();
  if (session === undefined) {
    redirect("/login");
    return null;
  }

  const t = await getTranslations("MenuNavbar");
  const menuItems = [
    {
      id: "profile",
      icon: <PersonOutlineIcon />,
      title: t('profile'),
      route: "/profile"
    },
    {
      id: "password",
      icon: <PasswordIcon />,
      title: t('password'),
      route: "/profile/password"
    },
    {
      id: "orders",
      icon: <HistoryIcon />,
      title: t('orders'),
      route: "/profile/orders"
    },
    {
      id: "products",
      icon: <Inventory2OutlinedIcon />,
      title: (session.user as User).admin ? t('allProducts') : t('myProducts'),
      route: "/profile/products"
    },
    {
      id: "blogs",
      icon: <FeedOutlinedIcon />,
      title: t('blogs'),
      route: "/profile/blogs"
    },
  ];

  return (
    <div className="w-full flex-4 flex flex-col border dark:border-[#ffffff1f] shadow-lg rounded-lg bg-[#FEFEFE] dark:bg-[#1D2024]">
      {menuItems.map((item) => (
        <Link href={item.route} key={item.id}>
          <div
            className={`flex items-center gap-x-3 px-4 py-3 border-b-[1px] dark:border-b-[#ffffff1f] transition ease-in-out cursor-pointer ${selectedItem === item.id ? "text-red border-l-[2px] border-l-red rounded-sm" : ""}`}
          >
            {item.icon}
            <span className={`text-sm ${mtavruli.className}`}>{item.title}</span>
          </div>
        </Link>
      ))}
      <div
        key={"logout"}
        className="flex items-center gap-x-3 px-4 py-3 border-b-[1px] dark:border-none transition ease-in-out cursor-pointer pb-[15px]"
      >
        <LogoutIcon />
        <span className={`text-sm ${mtavruli.className}`}>{t("Logout")}</span>
      </div>
    </div>
  );
}

export default UserProfileMenu;

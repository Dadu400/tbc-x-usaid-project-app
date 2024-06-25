import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PasswordIcon from '@mui/icons-material/Password';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Link from 'next/link';
import { GetSession } from '../../actions';
import { getTranslations } from 'next-intl/server';

interface UserProfileMenuProps {
  selectedItem: string;
}

async function UserProfileMenu({ selectedItem }: UserProfileMenuProps) {
  const session = await GetSession();

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
      title: session.user.admin ? t('allProducts') : t('myProducts'),
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
    <div className="w-full flex-4 flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE]">
      {menuItems.map((item) => (
        <Link href={item.route} key={item.id}>
          <div
            className={`flex items-center gap-x-3 px-4 py-3 border-b-[1px] transition ease-in-out cursor-pointer ${selectedItem === item.id ? "text-red border-l-[2px] border-l-red rounded-sm" : ""}`}
          >
            {item.icon}
            <span className="text-md font-['mtavruli']">{item.title}</span>
          </div>
        </Link>
      ))}
      <div
        key={"logout"}
        className="flex items-center gap-x-3 px-4 py-3 border-b-[1px] transition ease-in-out cursor-pointer"
      >
        <LogoutIcon />
        <span className="text-md font-['mtavruli']">{t("Logout")}</span>
      </div>
    </div>
  );
}

export default UserProfileMenu;

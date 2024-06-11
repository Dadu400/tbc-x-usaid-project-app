import { FiberNewOutlined } from "@mui/icons-material";
import Banner from "../../../components/banner/Banner";
import Categories from "../../../components/categories/Categories";
import ProductList from "../../../components/products/ProductList";
import DashboardLayout from "./DashboardLayout";
import StarIcon from '@mui/icons-material/Star';
import RoundedIcon from "../../../components/icons/RoundedIcon";
import SearchBar from "../../../components/search/SearchBar";
import FirstBanner from "../../../public/firstBanner.png";
import FirstBannerEn from "../../../public/firstBannerEn.png";

const HomePage = () => {
  return (
    <DashboardLayout>
      <div className="w-[62vw] mx-auto bg-[#F9F9FF] dark:bg-[#121B18] px-[1vw] py-[25px]">
        <SearchBar className={"mb-[35px]"} />
        <Categories />
        <Banner bannerEn={FirstBannerEn} bannerKa={FirstBanner} />
        <ProductList icon={<RoundedIcon icon={<FiberNewOutlined />} />} title={"ახალი დამატებული"} className={"mt-[50px]"} />
        <ProductList icon={<RoundedIcon icon={<StarIcon fontSize="medium" />} bgColor="#F6A330" />} title={"ყველაზე პოპულარული"} className={"mt-[50px]"} />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;

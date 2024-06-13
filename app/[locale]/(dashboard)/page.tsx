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
      <div className="xs:bg-[#019] w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto bg-[#F9F9FF] dark:bg-[#121B18] px-[1vw] py-[25px]">
        <SearchBar className={"mb-[35px]"} />
        <Categories />
        <Banner bannerEn={FirstBannerEn} bannerKa={FirstBanner} />
        <ProductList colCount={5} icon={<RoundedIcon icon={<FiberNewOutlined />} />} title={"ახალი დამატებული"} className={"mt-[50px]"} />
        <ProductList colCount={5} icon={<RoundedIcon icon={<StarIcon fontSize="medium" />} bgColor="#F6A330" />} title={"ყველაზე პოპულარული"} className={"mt-[50px]"} />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;

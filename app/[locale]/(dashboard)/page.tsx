import { FiberNewOutlined } from "@mui/icons-material";
import Banner from "../../../components/banner/Banner";
import Categories from "../../../components/categories/Categories";
import ProductList from "../../../components/products/ProductList";
import DashboardLayout from "./DashboardLayout";
import StarIcon from '@mui/icons-material/Star';
import RoundedIcon from "../../../components/icons/RoundedIcon";
import SearchBar from "../../../components/search/SearchBar";

const HomePage = () => {
  return (
    <DashboardLayout>
      <div className="w-[62vw] mx-auto bg-[#FEFEFE] dark:bg-[#121B18] px-[1vw] py-[25px]">
        <SearchBar className={"mb-[35px]"} />
        <Categories />
        <Banner />
        <ProductList icon={<RoundedIcon icon={<FiberNewOutlined />} />} title={"ახალი დამატებული"} className={"mt-[50px]"} />
        <ProductList icon={<RoundedIcon icon={<StarIcon fontSize="medium" />} bgColor="#F6A330" />} title={"მოთხოვნადი"} className={"mt-[50px]"} />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;

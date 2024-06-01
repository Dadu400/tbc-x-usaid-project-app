import { FiberNewOutlined } from "@mui/icons-material";
import Banner from "../../../components/banner/Banner";
import Categories from "../../../components/categories/Categories";
import ProductList from "../../../components/products/ProductList";
import DashboardLayout from "./DashboardLayout";

const HomePage = () => {
  return (
    <DashboardLayout>
      <div className="w-[62vw] mx-auto bg-[#FEFEFE] px-[1vw] py-[25px]">
        <Categories />
        <Banner />
        <ProductList icon={<FiberNewOutlined />} title={"ახალი დამატებული"} className={"mt-[50px]"} />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;

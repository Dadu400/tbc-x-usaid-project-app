import Categories from "../../../components/categories/Categories";
import ProductList from "../../../components/products/ProductList";
import DashboardLayout from "./DashboardLayout";

const HomePage = () => {
  return (
    <DashboardLayout>
      {/* <Banner /> */}
      <div className="w-[62vw] mx-auto bg-[#FEFEFE] px-[1vw] py-[25px]">
        <Categories />
        <ProductList />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;

import Categories from "../../../components/categories/Categories";
import ProductList from "../../../components/products/ProductList";
import DashboardLayout from "./DashboardLayout";

const HomePage = () => {
  return (
    <DashboardLayout>
      {/* <Banner /> */}
      <Categories />
      <ProductList />
    </DashboardLayout>
  );
};

export default HomePage;

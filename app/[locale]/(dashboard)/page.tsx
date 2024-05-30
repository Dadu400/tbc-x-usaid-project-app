import Categories from "../../../components/categories/Categories";
import DashboardLayout from "./DashboardLayout";

const HomePage = () => {
  return (
    <DashboardLayout>
      {/* <Banner /> */}
      <Categories />
      {/* <ProductList /> */}
    </DashboardLayout>
  );
};

export default HomePage;

import Banner from "../../../components/banner/Banner";
import ProductList from "../../../components/products/ProductList";
import DashboardLayout from "./DashboardLayout";

const HomePage = () => {
  return (
    <DashboardLayout>
      <Banner />
      <ProductList />
    </DashboardLayout>
  );
};

export default HomePage;

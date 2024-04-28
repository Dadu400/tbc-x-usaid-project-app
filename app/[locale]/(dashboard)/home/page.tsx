import DashboardLayout from "../DashboardLayout";
import Banner from "../../../../components/banner/Banner";
import ProductList from "../../../../components/products/ProductList";

const HomePage = () => {
  return (
    <DashboardLayout>
      <Banner />
      <ProductList />
    </DashboardLayout>
  );
};

export default HomePage;

import DashboardLayout from "./DashboardLayout";
import ProductList from "@/components/products/ProductList";

function IndexPage () {
    return (
        <DashboardLayout>
              <ProductList />
        </DashboardLayout>
    )
}

export default IndexPage;
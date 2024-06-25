import { getTranslations } from "next-intl/server";
import { getUsersProducts } from "../../actions";
import { getProducts } from "../../helpers/axiosProduct";
import ProductList from "../products/ProductList";
import { JWTPayload } from "jose";
import { User } from "../auth/LoginForm";

async function MyProductsList({ session }: { session: JWTPayload | undefined }) {
    if (!session) return (<div></div>);

    const products = session && (session.user as User).admin ? await getProducts() : await getUsersProducts((session.user as User).id);

    const t = await getTranslations("ProductPage");
    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <h2 className="text-2xl font-['mtavruli'] font-semibold mb-[10px] text-center w-full">{(session.user as User).admin ? t("allproducts") : t("myproducts")}</h2>
            <ProductList products={products} addNewBtn={true} colCount={3} />
        </div>
    )
}

export default MyProductsList;
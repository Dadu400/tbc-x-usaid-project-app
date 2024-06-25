import { getTranslations } from "next-intl/server";
import { getUsersProducts } from "../../actions";
import { getProducts } from "../../helpers/axiosProduct";
import ProductList from "../products/ProductList";
import { JWTPayload } from "jose";
import { User } from "../auth/LoginForm";
import localFont from "@next/font/local";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

async function MyProductsList({ session }: { session: JWTPayload | undefined }) {
    if (!session) return (<div></div>);

    const products = session && (session.user as User).admin ? await getProducts() : await getUsersProducts((session.user as User).id);

    const t = await getTranslations("ProductPage");
    return (
        <div className="w-full flex flex-col border dark:border-[#ffffff1f] shadow-lg rounded-lg bg-[#FEFEFE] dark:bg-[#1D2024] p-8">
            <h2 className={`text-2xl ${mtavruli.className} uppercase font-semibold mb-[20px] text-center w-full`}>{(session.user as User).admin ? t("allproducts") : t("myproducts")}</h2>
            <ProductList products={products} addNewBtn={true} />
        </div>
    )
}

export default MyProductsList;
import { FiberNewOutlined } from "@mui/icons-material";
import Banner from "../../../components/banner/Banner";
import Categories from "../../../components/categories/Categories";
import ProductList, { Product } from "../../../components/products/ProductList";
import DashboardLayout from "./DashboardLayout";
import StarIcon from '@mui/icons-material/Star';
import RoundedIcon from "../../../components/icons/RoundedIcon";
import SearchBar from "../../../components/search/SearchBar";
import FirstBanner from "../../../public/firstBanner.png";
import FirstBannerEn from "../../../public/firstBannerEn.png";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";
import { GetSession, getNewlyAddedProducts, getPopularProducts } from "../../../actions";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MetaData");

  return {
    title: t("title"),
    description: t("description"),
  }
}

async function HomePage() {
  const session = await GetSession();
  const t = await getTranslations("HomePage");

  const newlyAddedProducts: Product[] = await getNewlyAddedProducts();
  const popularProducts: Product[] = await getPopularProducts();

  return (
    <DashboardLayout>
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto bg-[#F9F9FF] dark:bg-[#121B18] px-[1vw] py-[25px]">
        <SearchBar className={"mb-[35px]"} />
        <Categories />
        <Banner bannerEn={FirstBannerEn.src} bannerKa={FirstBanner.src} />
        <ProductList session={session} products={newlyAddedProducts} icon={<RoundedIcon icon={<FiberNewOutlined />} />} title={t("newadd")} className={"mt-[50px]"} />
        <ProductList session={session} products={popularProducts} icon={<RoundedIcon icon={<StarIcon fontSize="medium" />} bgColor="#F6A330" />} title={t("popular")} className={"mt-[50px]"} />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;

import SearchPage from "../../../../components/search/SearchPage";
import DashboardLayout from "../DashboardLayout";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("searchTitle"),
        description: t("searchDescription"),
    }
}

function Search() {
    return (
        <DashboardLayout>
            <SearchPage />
        </DashboardLayout>
    )
}

export default Search;
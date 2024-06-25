import SearchPage from "../../../../components/search/SearchPage";
import DashboardLayout from "../DashboardLayout";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";
import { GetSession } from "../../../../actions";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("searchTitle"),
        description: t("searchDescription"),
    }
}

async function Search() {
    const session = await GetSession();
    return (
        <DashboardLayout>
            <SearchPage session={session} />
        </DashboardLayout>
    )
}

export default Search;
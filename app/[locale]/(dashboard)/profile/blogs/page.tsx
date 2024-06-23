import ProfilePageLayout from '../../../../../components/profile/ProfilePageLayout';
import BlogsList from '../../../../../components/blogs/BlogsList';
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("blogManageTitle"),
        description: t("blogManageDescription"),
    }
}

function BlogsPage() {
    return (
        <ProfilePageLayout component={<BlogsList />} selectedMenuItem="blogs" />
    )
}

export default BlogsPage;
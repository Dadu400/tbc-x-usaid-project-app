import AddEditBlogForm from "../../../../../../../components/blogs/AddEditBlogForm";
import ProfilePageLayout from "../../../../../../../components/profile/ProfilePageLayout";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";
import { GetSession } from "../../../../../../../actions";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("blogCreateTitle"),
        description: t("blogCreateDescription"),
    }
}

async function AddEditBlog() {
    const session = await GetSession();

    return (
        <ProfilePageLayout component={<AddEditBlogForm session={session} isNew={false} />} selectedMenuItem="blogs" />
    )
}

export default AddEditBlog;
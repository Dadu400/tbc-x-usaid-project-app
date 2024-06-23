import AddEditBlogForm from "../../../../../../components/blogs/AddEditBlogForm";
import ProfilePageLayout from "../../../../../../components/profile/ProfilePageLayout";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("MetaData");

    return {
        title: t("blogCreateTitle"),
        description: t("blogCreateDescription"),
    }
}

function AddEditBlog() {
    return (
        <ProfilePageLayout component={<AddEditBlogForm blog={{ id: "", title: "", text: "" }} />} selectedMenuItem="blogs" />
    )
}

export default AddEditBlog;
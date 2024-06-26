import DashboardLayout from "../DashboardLayout";
import Blogs from "../../../../components/blogs/Blogs";
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("MetaData");

  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
  }
}

function BlogPage() {
  return (
    <DashboardLayout>
      <Blogs />
    </DashboardLayout>
  );
};

export default BlogPage;

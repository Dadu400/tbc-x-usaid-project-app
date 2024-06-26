import { GetSession, getBlogs } from "../../actions";
import BlogCard, { Blog } from "./BlogCard";
import { getTranslations } from "next-intl/server";
import localFont from '@next/font/local';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

export default async function Blogs() {
  const t = await getTranslations("Blog");
  const session = await GetSession();

  const fetchedBlogs: Blog[] = await getBlogs();

  return (
    <section className="w-[60vw] m-auto flex flex-col my-[35px]">
      <div className={`${mtavruli.className} text-center text-2xl font-semibold mb-[35px] uppercase`}>{t("header")}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-[#F9F9FF] dark:bg-[#121B18] mb-[150px]">
        {fetchedBlogs.map((blog: Blog) => (
          <BlogCard key={blog.id} session={session} blog={blog} />
        ))}
      </div>
    </section>
  );
}

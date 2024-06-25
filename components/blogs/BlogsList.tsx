import Link from "next/link";
import BlogCard, { Blog } from "./BlogCard";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { GetSession, getBlogs, getUsersBlogs } from "../../actions";
import { getTranslations } from "next-intl/server";
import { User } from "../auth/LoginForm";
import localFont from "@next/font/local";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

async function BlogsList() {
    const t = await getTranslations("Blogs");

    const session = await GetSession();
    if (session === undefined) {
        return (
            <div className="text-center mt-8">
                <h2 className="text-2xl font-bold mb-4">You are not signed in</h2>
            </div>
        );
    }
    const blogs: Blog[] = (session.user as User).admin ? await getBlogs() : await getUsersBlogs((session.user as User).id);

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        justifyContent: "center"
    };

    return (
        <div className="w-full flex flex-col border dark:border-[#ffffff1f] shadow-lg rounded-lg bg-[#FEFEFE] dark:bg-[#1D2024] p-8 mb-[74px]">
            <h2 className={`text-2xl ${mtavruli.className} uppercase font-semibold mb-[20px] text-center w-full `}>{t('header')}</h2>
            <div className="flex justify-end">
                <Link href={"/profile/blogs/create"}>
                    <button className="bg-[#404978] text-white text-sm rounded-lg py-2 px-4">
                        <AddOutlinedIcon className="text-sm" /> {t("button")}
                    </button>
                </Link>
            </div>
            <div className={"w-[100%] mx-auto h-full"}>
                <div className={`grid mt-5 gap-[25px] gap-y-[30px] h-full`} style={gridStyle}>
                    {blogs.map((blog, index) => (
                        <BlogCard key={index} session={session} blog={blog} />
                    ))}
                </div>
            </div >
        </div>
    )
}

export default BlogsList;
import { getSingleBlog } from "../../../../../helpers/axios";
import DashboardLayout from "../../DashboardLayout";
import { unstable_setRequestLocale } from 'next-intl/server';
import Dramatic from "../../../../../public/Dramatic.webp";
import person from "../../../../../public/person.png";
import Image from 'next/image';
import { Metadata } from "next";

interface Params {
  id: string;
  locale: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const id = Number(params.id);
  const blog = await getSingleBlog(id);
  return {
    title: blog.title,
    description: blog.text,
  }
}

export default async function BlogsIdPage({ params }: { params: Params }) {
  unstable_setRequestLocale(params.locale);
  const id = Number(params.id);

  let blog;
  try {
    blog = await getSingleBlog(id);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return (
      <DashboardLayout useParticles={false}>
        <div className="w-[60vw] m-auto mt-[20px] flex flex-col bg-[#F9F9FF] dark:bg-[#121B18] pl-12">
          <h1 className="font-bold text-2xl text-gray-800 mt-[20px]">
            Error fetching blog post
          </h1>
        </div>
      </DashboardLayout>
    );
  }

  const formattedDate = new Date(blog.added_on).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <DashboardLayout useParticles={false}>
      <div className="w-[60vw] m-auto mt-[20px] mb-[70px] flex flex-col bg-[#F9F9FF] dark:bg-[#121B18] pl-12">
        <h1 className="font-bold text-2xl text-gray-800 dark:text-white mt-[20px]">
          {blog.title}
        </h1>
        <div className="flex items-center gap-2 my-2 self-start mt-[15px]">
          <Image src={blog.user.imageurl} width={48} height={48} alt="author" className="w-12 h-12 rounded-full dark:border dark:border-[#ffffff1f]" />
          <div className="flex flex-col">
            <span className="text-gray-700 dark:text-[#ffffffbf] text-sm">
              {blog.user.name} {blog.user.surname}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-[#ffffffbf] text-xs">{blog.average_read_time} min read</span>
              <span className="text-gray-500 dark:text-[#ffffffbf] text-md">·</span>
              <span className="text-gray-500 dark:text-[#ffffffbf] text-xs"> {formattedDate}</span>
            </div>
          </div>
        </div>
        <Image src={blog.imageurl} width={500} height={500} alt="blog_picture" className="w-[500px] my-4 rounded-md m-auto" />
        <div className="mt-5 w-[100%]">
          <p className="text-gray-700 dark:text-[#ffffffbf] text-md">{blog.text}</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

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
  const post = await getSingleBlog(id);
  return {
    title: post.title,
    description: post.body,
  }
}

export default async function BlogsIdPage({ params }: { params: Params }) {
  unstable_setRequestLocale(params.locale);
  const id = Number(params.id);

  let post;
  try {
    post = await getSingleBlog(id);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return (
      <DashboardLayout useParticles={false}>
        <div className="w-[60vw] m-auto mt-[20px] flex flex-col bg-[#fefefe] pl-12">
          <h1 className="font-bold text-2xl text-gray-800 mt-[20px]">
            Error fetching blog post
          </h1>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout useParticles={false}>
      <div className="w-[60vw] m-auto mt-[20px] flex flex-col bg-[#fefefe] pl-12">
        <h1 className="font-bold text-2xl text-gray-800 mt-[20px]">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 my-2 self-start">
          <Image src={person} alt="author" className="w-12 h-12" />
          <div className="flex flex-col">
            <span className="text-gray-700 text-sm">
              Author Name
            </span>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs">9 min read</span>
              <span className="text-gray-500 text-md">·</span>
              <span className="text-gray-500 text-xs"> Nov 23, 2023</span>
            </div>
          </div>
        </div>
        <Image src={Dramatic} alt="blog_picture" className="w-[80%] h-[560px] my-4 rounded-md m-auto" />
        <div className="mt-5 w-[100%]">
          <p className="text-gray-700 text-md">{post.body}</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

import { getSingleBlog } from "../../../../helpers/axios";
import Dramatic from "../../../../../public/Dramatic.webp";
import Image from "next/image";
import axios from "axios";
import DashboardLayout from "../../DashboardLayout";
import { unstable_setRequestLocale } from 'next-intl/server';

interface Post {
  title: string;
  tags: string[];
  id: string | number;
  body: string;
}

interface Params {
  id: string;
  locale: string;
}

export async function generateStaticParams() {
  const res = await axios.get("https://dummyjson.com/posts");
  return res.data.posts.map((post: Post) => ({
    id: `${post.id}`,
  }));
}

export default async function BlogsIdPage({ params }: { params: Params }) {
  unstable_setRequestLocale(params.locale);
  const idString = params?.id;
  const id = Number(idString);
  const post = await getSingleBlog(id);

  return (
    <DashboardLayout>
      <article className="bg-gray-50 min-h-screen py-10 px-4 md:px-10 dark:bg-black">
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow dark:bg-slate-500">
          <div className="mb-6 md:mb-10">
            <div className="w-full h-64 md:h-96 relative mb-6">
              <Image
                src={Dramatic}
                layout="fill"
                objectFit="cover"
                alt="LOGO_IMG"
                className="rounded-md"
              />
            </div>
            <h1 className="font-bold text-4xl text-gray-800 mb-4 dark:text-white">
              {post.title}
            </h1>
            <p className="text-gray-600 text-base mb-4 dark:text-white">{post.body}</p>
          </div>
          <div className="pt-4">
            <h2 className="text-gray-800 font-semibold text-xl mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: string, key: number) => (
                <span
                  className="bg-gray-200 text-gray-700 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full cursor-pointer dark:text-black"
                  key={key}
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-gray-500 dark:text-white">Release Date: 15.06.2021</p>
          </div>
        </div>
      </article>
    </DashboardLayout>
  );
}

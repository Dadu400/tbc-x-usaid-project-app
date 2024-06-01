import { getSingleBlog } from "../../../../../helpers/axios";
import axios from "axios";
import DashboardLayout from "../../DashboardLayout";
import { unstable_setRequestLocale } from 'next-intl/server';
import Dramatic from "../../../../../public/Dramatic.webp";
import person from "../../../../../public/person.png";
import Image from 'next/image';
import ProductList from "../../../../../components/products/ProductList";

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
      <div className="w-[60vw] m-auto flex flex-col items-center bg-[#fefefe]">
        <h1 className="font-bold text-4xl text-gray-800 mb-6 text-center mt-[20px]">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 my-2 self-start ml-12">
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
        <Image src={Dramatic} alt="blog_picture" className="w-[80%] h-[560px] my-4 rounded-md" />
        <div className="mt-10 w-[80%] text-center">
          <p className="text-gray-700 text-center">{post.body}</p>
        </div>
      </div>
      <ProductList />
    </DashboardLayout>
  );
}

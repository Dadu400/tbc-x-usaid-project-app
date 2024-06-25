"use client";

import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useRouter } from "next/navigation";

export interface Blog {
  id: number;
  title: string;
  text: string;
  imageurl: string;
  user: {
    id: string;
    name: string;
    surname: string;
    imageurl: string;
    phone: string;
  };
  added_on: Date;
  average_read_time: number;
}

function BlogCard({ blog }: { blog: Blog }) {
  const router = useRouter();

  const formatted_post_date = new Date(blog.added_on).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="flex flex-col gap-1 bg-[#FEFEFE] shadow-lg rounded-xl max-w-[300px] group relative">
      <div className="w-full cor">
        <Image
          src={blog.imageurl}
          alt="LOGO_IMG"
          objectFit="contain"
          width={1920} height={1080}
          className="w-[300px] h-[200px] object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col px-5 py-2">
        <div className="flex items-center gap-2 my-2">
          <Image width={1920} height={1080} src={blog.user.imageurl} alt="author" className="w-6 h-6" />
          <span className="text-gray-700 text-sm pt-1">
            {blog.user.name} {blog.user.surname}
          </span>
        </div>
        <div className="w-full h-[40px] mb-5">
          <h4 className="text-lg font-semibold mb-2 line-clamp-2 overflow-hidden whitespace-pre-line break-words">{blog.title}</h4>
        </div>
        <div>
          <p className="text-gray-700 text-sm line-clamp-2 overflow-hidden h-[40px] whitespace-pre-line break-words">
            {blog.text}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-gray-500 text-xs">{blog.average_read_time} min read</span>
            <span className="text-gray-500 text-md">·</span>
            <span className="text-gray-500 text-xs">{formatted_post_date}</span>
          </div>
          <div className="absolute flex gap-[5px] justify-center items-center right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

            <div className="flex justify-center items-center border-[1px] border-[#404978] rounded-md p-[2px] cursor-pointer" onClick={() => {
              router.push(`/profile/blogs/edit/${blog.id}`);
            }}>
              <EditIcon fontSize="small" className="text-[#404978]" />
            </div>
            <div className="flex justify-center items-center border-[1px] border-red rounded-md p-[2px] bg-red cursor-pointer" onClick={() => {

            }}>
              <DeleteOutlineIcon fontSize="small" className="text-white" />
            </div>
            {/* <EditIcon className="w-4 h-4 text-[#404978]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

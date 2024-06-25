import Image from "next/image";
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';
// import { useTranslations } from 'next-intl';

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
  // const t = useTranslations("Blogs");

  const formatted_post_date = new Date(blog.added_on).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <Link href={`/blogs/${blog.id}`}>
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
            <div className="absolute flex justify-center items-center border-[1px] border-[#404978] rounded-md p-1 right-2 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* <DeleteIcon className="w-4 h-4 text-[#404978]" /> */}
              <EditIcon className="w-4 h-4 text-[#404978]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

import Image from "next/image";
import LegoEcho from "@/components/icons/LegoEcho.png";

function Blog({ blog }) {
  return (
    <article className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between items-start w-[350px] cursor-pointer">
      <div className="flex flex-col items-start gap-1">
      <div className="w-full h-[200px] mb-4 relative rounded-md overflow-hidden">
          <Image
            src={LegoEcho}
            alt="LOGO_IMG"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h4 className="text-xl font-semibold mb-2">{blog.title}</h4>
        <div className="flex gap-1">
        {blog.tags.map((tag, key) => (
           <span className="text-gray-700 mb-4" key={key}>
           #{tag}
         </span>
        )
        )}
        </div>
        </div> 
        <div className="flex flex-col">
        <span className="text-gray-500 mb-4 text-sm">Release date: 15/06/2021 </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-auto">
          Read More
        </button>
        </div>
    </article>
  );
}

export default Blog;



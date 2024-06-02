import Blog from "../blogs/Blog";
import axios from "axios";


export interface Blog {
  id: string | number;
  title: string;
  text: string;
  imageUrl: string,
}

const getData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/posts");
    return res.data.posts;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
    throw new Error("Failed to fetch data");
  }
}
export default async function Blogs() {
  const fetchedBlogs = await getData();

  return (
    <section className="w-[60vw] m-auto flex flex-col my-[20px]">
      <div className="text-center text-2xl font-semibold font-['mtavruli'] mb-[25px]">სიახლეები</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-[#FEFEFE]">
        {fetchedBlogs.map((blog: Blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

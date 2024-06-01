import Blog from "../blogs/Blog";
import axios from "axios";


interface Blog {
  id: string | number;
  title: string;
  tags: string[];
}

const getData = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));

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
    <section className="w-[60vw] m-auto flex my-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-[#FEFEFE]">
        {fetchedBlogs.map((blog: Blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

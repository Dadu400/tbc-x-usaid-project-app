import { GetSession, getBlogs } from "../../actions";
import BlogCard, { Blog } from "./BlogCard";


export default async function Blogs() {
  const session = await GetSession();

  const fetchedBlogs: Blog[] = await getBlogs();

  return (
    <section className="w-[60vw] m-auto flex flex-col my-[20px]">
      <div className="text-center text-2xl font-semibold font-['mtavruli'] mb-[25px]">სიახლეები</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-[#FEFEFE]">
        {fetchedBlogs.map((blog: Blog) => (
          <BlogCard key={blog.id} session={session} blog={blog} />
        ))}
      </div>
    </section>
  );
}

import Blog from "./Blog";
import axios from "axios";

const getData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/posts");
    return res.data.posts;
  } catch (error) {
    throw new Error("Failed to fetch data: ", error.message);
  }
};

export default async function Blogs() {
  const fetchedBlogs = await getData();

  return (
    <main>
      <section className="w-full px-4 md:px-12 py-12 flex justify-center mb-4">
        <div className="max-w-8xl">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-start mb-8">
            Bringing LEGO Dreams to Life: Explore Our Latest Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {fetchedBlogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

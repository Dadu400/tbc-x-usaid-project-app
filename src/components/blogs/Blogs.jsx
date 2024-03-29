import BlogsData from "../../data/BlogsData";
import Blog from "./Blog";

function Blogs() {
  return (
    <main>
      <section className="w-full px-4 md:px-12 py-12 flex justify-center mb-4">
        <div className="max-w-8xl">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-start mb-8">Bringing LEGO Dreams to Life: Explore Our Latest Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {BlogsData.map((blog, id) => (
              <Blog key={id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blogs;

import Blog from "./Blog";
import axios from "axios";
import { getTranslations } from "next-intl/server";

const getData = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  try {
    const res = await axios.get("https://dummyjson.com/posts");
    return res.data.posts;
  } catch (error) {
    throw new Error("Failed to fetch data: ", error.message);
  }
};

export default async function Blogs() {
  const t = await getTranslations('Blogs');
  const fetchedBlogs = await getData();

  return (
    <main>
      <section className="w-full px-4 md:px-12 py-12 flex justify-center dark:bg-black">
        <div className="max-w-8xl">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-start mb-8 dark:text-white">
          {t('header')}
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

import axios from "axios";

interface BlogPost {
  id: number;
}

const getData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/posts");
    return res.data.posts;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
    throw new Error("Failed to fetch data");
  }
};

export const getSingleBlog = async (id: number | string) => {
  const blog = await getData();
  const singleBlog = await blog.find((post: BlogPost) => post.id === Number(id));
  return singleBlog;
}

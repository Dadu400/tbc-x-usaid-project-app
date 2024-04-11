import axios from "axios";

const getData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/posts");
    return res.data.posts;
  } catch (error) {
    throw new Error("Failed to fetch data: ", error.message);
  }
};

export const getSingleBlog = async (id) => {
  const blog = await getData();
  const singleBlog = await blog.find((post) => post.id === Number(id));
  return singleBlog;
};

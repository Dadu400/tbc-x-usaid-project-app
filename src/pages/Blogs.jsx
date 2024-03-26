import BlogsData from "../data/BlogsData";
import Blog from "../components/blogs/Blog";

function Blogs() {
    return (
        <main>
            <section>
                {BlogsData.map((blog) => <Blog blog={blog}/>)}
            </section>
        </main>
    )
}

export default Blogs;
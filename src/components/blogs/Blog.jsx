function Blog({ blog }) {
  return (
    <article>
      <div>
        <img src={blog.image} alt="LOGO_IMG" className="w-[300px] h-[200px]"/>
        <h4>{blog.title}</h4>
        <p>{blog.description}</p>
        <span>{blog.date}</span>
      </div>
    </article>
  );
}

export default Blog;

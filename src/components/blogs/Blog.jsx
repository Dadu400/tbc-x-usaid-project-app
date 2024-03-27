function Blog({ blog }) {
  return (
    <article className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between items-start w-[350px] cursor-pointer">
      <div className="flex flex-col items-start gap-1">
        <img src={blog.image} alt="LOGO_IMG" className="w-[300px] h-[200px] object-fill rounded-md mb-4"/>
        <h4 className="text-xl font-semibold mb-2">{blog.title}</h4>
        <p className="text-gray-700 mb-4">{blog.description}</p>
        </div> 
        <div className="flex flex-col">
        <span className="text-gray-500 mb-4 text-sm">Release date: {blog.releaseDate}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-auto">
          Read More
        </button>
        </div>
    </article>
  );
}

export default Blog;



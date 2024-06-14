import Link from "next/link";
import Blog from "./Blog"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function BlogsList() {
    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <h2 className="text-2xl font-['mtavruli'] font-semibold mb-[10px] text-center w-full">ბლოგების მენეჯმენტი</h2>
            <div className="flex justify-end">
                <Link href={"/profile/blogs/create"}>
                    <button className="bg-[#404978] text-white text-sm rounded-lg py-2 px-4">
                        <AddOutlinedIcon className="text-sm" /> ახალი ბლოგის დამატება
                    </button>
                </Link>
            </div>
            <div className={"w-[100%] mx-auto h-full"}>
                <div className={`grid grid-cols-3 mt-5 gap-[25px] gap-y-[30px] h-full`}>
                    <Blog blog={{ title: "ბლოგის სათაური", id: "1" }} />
                    <Blog blog={{ title: "ბლოგის სათაური", id: "1" }} />
                    <Blog blog={{ title: "ბლოგის სათაური", id: "1" }} />
                    <Blog blog={{ title: "ბლოგის სათაური", id: "1" }} />
                    <Blog blog={{ title: "ბლოგის სათაური", id: "1" }} />
                </div>
            </div >
        </div>
    )
}

export default BlogsList;
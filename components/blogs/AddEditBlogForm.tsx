"use client";

import { useState } from "react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Blog from "./Blog";
import UploadIcon from '@mui/icons-material/Upload';

function AddEditBlogForm({ blog = null, onBackClicked }: { blog: any, onBackClicked: () => void }) {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogText, setBlogText] = useState("");

    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <div className="flex items-center justify-center">
                <ArrowBackOutlinedIcon className="text-3xl cursor-pointer" onClick={() => {
                    onBackClicked();
                }} />
                <span className="text-xl font-['mtavruli'] font-semibold text-center w-full">ბლოგის {blog == null || blog.id == "" ? "დამატება" : "რედაქტირება"}</span>
            </div>

            <div className='flex flex-col items-center justify-center mt-[30px] w-[300px] self-center'>
                <span className="text-md text-center w-full mb-[20px]">ნიმუში:</span>
                <Blog blog={{ id: "", title: blogTitle, text: blogText }} />
            </div>
            <form className='w-[70%] mx-auto mt-[30px] flex flex-col gap-[10px]'>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-md">სათაური</label>
                    <input type="text" id="title" value={blogTitle} onChange={
                        (e) => {
                            setBlogTitle(e.target.value);
                        }
                    } className="border border-gray-300 rounded-lg p-2 mt-1 focus:ring-[#404978] focus:border-[#404978] focus:outline-none focus:[#404978]" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="blogText" className="text-md">ტექსტი</label>
                    <textarea id="blogText" rows={5} value={blogText} onChange={(e) => {
                        setBlogText(e.target.value);
                    }} className="border border-gray-300 rounded-lg p-2 mt-1 whitespace-pre-line break-words focus:ring-[#404978] focus:border-[#404978] focus:outline-none focus:[#404978]" />
                </div>
                <div className='w-[80%] flex items-center mt-4'>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="hidden"
                    />
                    <label htmlFor="image" className="flex items-center cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:ring-[#404978] focus:border-[#404978] focus:outline-none focus:[#404978]">
                        <UploadIcon className="text-[#404978] mr-2" />
                        <span className="block text-md font-medium text-gray-700">ატვირთე ბლოგის სურათი</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-[40%] self-center mt-[25px] px-4 py-3 text-md font-medium text-white bg-[#404978] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                    შენახვა
                </button>
            </form>
        </div >
    )
}

export default AddEditBlogForm;
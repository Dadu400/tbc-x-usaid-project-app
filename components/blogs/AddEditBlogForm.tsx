"use client";

import { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import BlogCard, { Blog } from "./BlogCard";
import UploadIcon from '@mui/icons-material/Upload';
import Link from "next/link";
import test from "../../public/test.webp";
import { useRouter } from "next/navigation";
import { saveBlog, updateBlog } from "../../actions";
import { PutBlobResult } from "@vercel/blob";

function AddEditBlogForm({ session, blog, isNew }: { session: any, blog?: Blog, isNew: boolean }) {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [updatedBlog, setUpdatedBlog] = useState(!isNew && blog ? blog : {
        id: 0,
        title: "",
        text: "",
        imageurl: test.src,
        user: {
            id: session.user.id,
            name: session.user.name,
            surname: session.user.surname,
            imageurl: session.user.imageurl,
            phone: session.user.phone,
        },
        added_on: new Date(),
        average_read_time: 0
    });
    const [updatedImage, setUpdatedImage] = useState<File | undefined>(undefined);

    const handleBlogImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUpdatedImage(file);
            setUpdatedBlog({ ...updatedBlog, imageurl: URL.createObjectURL(file) });
        }
    };

    const onSaveClicked = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (updatedImage == null && isNew) {
            setErrorMessage('აირჩიეთ პროდუქტის სურათი');
            return;
        }

        let imageUrl = !isNew && updatedImage === undefined ? blog?.imageurl : undefined;
        if (imageUrl === undefined) {
            if (updatedImage == null) {
                setErrorMessage('აირჩიეთ პროდუქტის სურათი');
                return;
            }
            const response = await fetch(`/api/upload?filename=${updatedImage.name}`, {
                method: 'POST',
                body: updatedImage,
            });

            const newBlob = (await response.json()) as PutBlobResult;
            console.log(newBlob.url);
            imageUrl = newBlob.url;
        }

        const response = isNew ? await saveBlog(updatedBlog, imageUrl) : await updateBlog(updatedBlog, imageUrl);
        if (response.ok) {
            router.push("/profile/blogs");
            router.refresh();
        } else {
            setErrorMessage("შეცდომა ბლოგის შენახვისას");
        }
    }

    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <div className="flex items-center justify-center">
                <Link href={"/profile/blogs"} className="self-start">
                    <ArrowBackOutlinedIcon className="text-3xl cursor-pointer" />
                </Link>
                <span className="text-xl font-['mtavruli'] font-semibold text-center w-full">ბლოგის {isNew ? "დამატება" : "რედაქტირება"}</span>
            </div>

            <div className='flex flex-col items-center justify-center mt-[30px] w-[300px] self-center'>
                <span className="text-md text-center w-full mb-[20px]">ნიმუში:</span>
                <BlogCard blog={updatedBlog} />
            </div>
            <form className='w-[70%] mx-auto mt-[30px] flex flex-col gap-[10px]'>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-md">სათაური</label>
                    <input type="text" id="title" value={updatedBlog.title} onChange={
                        (e) => {
                            setUpdatedBlog({ ...updatedBlog, title: e.target.value })
                        }
                    } className="border border-gray-300 rounded-lg p-2 mt-1 focus:ring-[#404978] focus:border-[#404978] focus:outline-none focus:[#404978]" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="blogText" className="text-md">ტექსტი</label>
                    <textarea id="blogText" rows={5} value={updatedBlog.text} onChange={(e) => {
                        setUpdatedBlog({ ...updatedBlog, text: e.target.value })
                    }} className="border border-gray-300 rounded-lg p-2 mt-1 whitespace-pre-line break-words focus:ring-[#404978] focus:border-[#404978] focus:outline-none focus:[#404978]" />
                </div>
                <div className='w-[80%] flex items-center mt-4'>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="hidden"
                        onChange={handleBlogImageUpload}
                    />
                    <label htmlFor="image" className="flex items-center cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:ring-[#404978] focus:border-[#404978] focus:outline-none focus:[#404978]">
                        <UploadIcon className="text-[#404978] mr-2" />
                        <span className="block text-md font-medium text-gray-700">ატვირთე ბლოგის სურათი</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-[40%] self-center mt-[25px] px-4 py-3 text-md font-medium text-white bg-[#404978] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onClick={(e) => onSaveClicked(e)}>
                    შენახვა
                </button>
            </form>
        </div >
    )
}

export default AddEditBlogForm;
"use client";

import { useEffect, useState } from "react";
import UserProfileMenu from "./UserProfileMenu";
import { redirect } from "next/navigation";
import ChangePassword from "./ChangePassword";
import UserInformation from "./UserInformation";
import MyProductsList from "./MyProductsList";
import AddEditProductForm from "../products/AddEditProductForm";
import { Product } from "../products/ProductList";
import BlogsList from "../blogs/BlogsList";
import { Blog } from "../blogs/Blogs";
import AddEditBlogForm from "../blogs/AddEditBlogForm";
import OrderHistory from "./OrderHistory";

function UserInfo() {
    const [selectedMenuItem, setSelectedMenuItem] = useState("profile");
    const [isNewProductPageOpen, setIsNewProductPageOpen] = useState(false);
    const [isNewBlogPageOpen, setIsNewBlogPageOpen] = useState(false);

    const [product, setProduct] = useState<Product | null>(null);
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        if (selectedMenuItem === "logout") {
            redirect("/login");
        }
    }, [selectedMenuItem]);

    const menuComponents: { [key: string]: JSX.Element } = {
        profile: <UserInformation />,
        password: <ChangePassword />,
        history: <OrderHistory />,
        products: (
            <MyProductsList
                onAddEditProductClicked={(product: Product) => {
                    setProduct(product);
                    setIsNewProductPageOpen(true);
                }}
            />
        ),
        blogs: (
            <BlogsList onAddEditBlogClicked={(blog: Blog) => {
                setBlog(blog);
                setIsNewBlogPageOpen(true);
            }} />
        ),
        logout: <></>,
    };

    return (
        <div className="w-[60vw] m-auto flex justify-between gap-[20px] my-[20px]">
            <div style={{ flex: "1" }}>
                <UserProfileMenu
                    selectedItem={selectedMenuItem}
                    setSelectedMenuItem={setSelectedMenuItem}
                />
            </div>
            <div style={{ flex: "3" }}>
                {!isNewProductPageOpen && !isNewBlogPageOpen && menuComponents[selectedMenuItem]}
                {isNewProductPageOpen && (<AddEditProductForm
                    product={product}
                    onBackClicked={() => {
                        setIsNewProductPageOpen(false);
                    }}
                />)}
                {isNewBlogPageOpen && (<AddEditBlogForm
                    blog={blog}
                    onBackClicked={() => {
                        setIsNewBlogPageOpen(false);
                    }}
                />)}

            </div>
        </div>
    );
}

export default UserInfo;
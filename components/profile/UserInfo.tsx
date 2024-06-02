"use client";

import { useEffect, useState } from "react";
import UserProfileMenu from "./UserProfileMenu";
import { redirect } from "next/navigation";
import ChangePassword from "./ChangePassword";
import UserInformation from "./UserInformation";
import MyProductsList from "./MyProductsList";
import AddEditProductForm from "../products/AddEditProductForm";
import { Product } from "../products/ProductList";

function UserInfo() {
    const [selectedMenuItem, setSelectedMenuItem] = useState("profile");
    const [isNewProductPageOpen, setIsNewProductPageOpen] = useState(false);
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (selectedMenuItem === "logout") {
            redirect("/login");
        }
    }, [selectedMenuItem]);

    const menuComponents: { [key: string]: JSX.Element } = {
        profile: <UserInformation />,
        password: <ChangePassword />,
        history: <div>History</div>,
        products: (
            <MyProductsList
                onAddEditProductClicked={(product: Product) => {
                    setProduct(product);
                    setIsNewProductPageOpen(true);
                }}
            />
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
                {isNewProductPageOpen ? (
                    <AddEditProductForm
                        product={product}
                        onBackClicked={() => {
                            setIsNewProductPageOpen(false);
                        }}
                    />
                ) : (
                    menuComponents[selectedMenuItem]
                )}
            </div>
        </div>
    );
}

export default UserInfo;
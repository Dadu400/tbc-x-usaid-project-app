"use client";

import { useEffect, useState } from "react"
import UserProfileMenu from "./UserProfileMenu"
import { redirect } from "next/navigation";
import ChangePassword from "./ChangePassword";
import UserInformation from "./UserInformation";
import MyProductsList from "./MyProductsList";

function UserInfo() {
    const [selectedMenuItem, setSelectedMenuItem] = useState("profile");

    useEffect(() => {
        if (selectedMenuItem === "logout") {
            redirect("/login")
        }
    }, [selectedMenuItem])

    const menuComponents: { [key: string]: JSX.Element } = {
        profile: <UserInformation />,
        password: <ChangePassword />,
        history: <div>History</div>,
        products: <MyProductsList />,
        logout: <></>
    }

    return (
        <div className="w-[60vw] m-auto flex justify-between gap-[20px] mt-[20px]">
            <div style={{ flex: "1" }}>
                <UserProfileMenu selectedItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
            </div>
            <div style={{ flex: "3" }}>
                {menuComponents[selectedMenuItem]}
            </div>
        </div>
    )
}

export default UserInfo
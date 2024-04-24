"use client"
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function LogoutButton({ handleLogout }) {
    const router = useRouter();
    
    return (
        <button className="w-full inline-flex items-center justify-center bg-[#FD8024] border border-solid border-[#FD8024] rounded-md px-2 py-2 font-medium text-lg leading-6 uppercase"
            onClick={() => {
                handleLogout(); 
                router.push("/login");
            }}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
    );
}


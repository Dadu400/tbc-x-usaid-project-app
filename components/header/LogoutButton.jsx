"use client"

import { useRouter } from "next/navigation";

export default function LogoutButton({ handleLogout}) {
    const router = useRouter();
  return (
    <button className="w-full inline-flex items-center justify-center bg-[#FD8024] border border-solid border-[#FD8024] rounded-sm px-4 py-3 font-medium text-lg leading-6 uppercase"
     onClick={() => {
        handleLogout(); 
        router.push('/login')}} 
        >
      log out
    </button>
  );
}

import Link from "next/link";

function SwiperUserMenuSlide({ title, icon, route, isSelected }: { title: string, icon: JSX.Element, route: string, isSelected: boolean }) {
    return (
        <Link href={route} className={`flex flex-col justify-center items-center gap-[5px] border ${isSelected ? "border-[#EC6652]" : ""} py-[1px] h-[70px] rounded-xl`}    >
            <span className={isSelected ? "text-[#EC6652]" : "text-[#1D90FF]"}>{icon}</span>
            <p className="text-[#4A4A4A] text-xs text-center">{title}</p>
        </Link>
    )
}

export default SwiperUserMenuSlide;
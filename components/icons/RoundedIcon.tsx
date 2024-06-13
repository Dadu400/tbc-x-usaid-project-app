interface RoundedIconProps {
    icon: React.ReactNode;
    bgColor?: string;
}

function RoundedIcon({ icon, bgColor = "#3C74FF" }: RoundedIconProps) {
    return (
        <div className="flex items-center text-2xl px-[3px] py-[5px] rounded-[10px] text-white" style={{ backgroundColor: bgColor }}>
            {icon}
        </div>
    )
}

export default RoundedIcon


function ContactData({ icon, data }: { icon: any, data: any }) {
    return (
        <div className="flex gap-[10px] items-center">
            <div className="border-[1px] border-[#40497899] p-[5px] rounded-full">
                {icon}
            </div>
            <span>{data}</span>
        </div>
    );
}

export default ContactData;
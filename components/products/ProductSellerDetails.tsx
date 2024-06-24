import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';
import Image from 'next/image';
import localFont from '@next/font/local';

const mtavruli = localFont({ src: "../../public/fonts/mtavruli.ttf" });

function ProductSellerDetails({ user }: { user: any }) {
    return (
        <div className="bg-[#FEFEFE] mt-[60px] w-[60vw] mx-auto shadow-xl p-[25px] flex flex-col">
            <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px] w-[135px]">
                <PersonIcon className="text-[#1e90ff]" /> გამყიდველი
            </span>
            <div className="w-full flex mt-[25px] justify-between items-center">
                <div className="flex items-center gap-4">
                    <Image src={user.imageurl} alt={user.name + " " + user.surname} width={120} height={30} className="rounded-full border-2 cursor-pointer w-[120px] h-[120px]" />
                    <div className="flex flex-col ml-[20px]">
                        <span className={`text-lg font-bold ${mtavruli.className}`}>
                            {user.name} {user.surname}
                        </span>
                        <span className={`text-md ${mtavruli.className}`}>{user.phone.startsWith('+995') || user.phone.startsWith('995') ? user.phone : '+995 ' + user.phone}</span>
                    </div>
                </div>
                <div>
                    <Link href={"tel:" + user.phone} className="mr-[25px] flex justify-center items-center gap-2">
                        <CallIcon className="text-[#1e90ff]" fontSize='small' />
                        <span className={`text-[#1e90ff] text-md ${mtavruli.className}`}>დაკავშირება</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductSellerDetails;
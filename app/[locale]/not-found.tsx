import Image from "next/image";
import Link from "next/link";
import not_found from "../../public/not_found.gif";
import ParticlesBackground from "../../components/particles/ParticlesBackground";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ParticlesBackground />
      <h1 className="text-xl font-['mtavruli'] font-semibold mb-[20px] text-center w-full">გვერდი ვერ მოიძებნა</h1>
      <Image
        src={not_found}
        alt="not_found"
        unoptimized={true}
        width={460}
        height={460}
      />
       <span className="text-gray-600 mb-6">
        It looks like this page took a vacation. But do not worry, we have got
        plenty of other cool stuff for you!
      </span>
      <Link href={"/"}
          className="w-[180px] px-4 py-2 text-md font-medium text-center text-white bg-[#1e90ff] rounded-md mt-[16px]"
        > უკან დაბრუნება
        </Link>
      </div>
  );
}

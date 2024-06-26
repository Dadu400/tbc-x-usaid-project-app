import Image from "next/image";
import Link from "next/link";
import not_found from "../../public/not_found.gif";
import localFont from '@next/font/local';
import { useLocale } from "next-intl";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

export default function NotFound() {
  const locale = useLocale();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src={not_found}
        alt="not_found"
        unoptimized={true}
        width={460}
        height={460}
      />
      <h1 className={`text-xl font-semibold mb-[20px] text-center w-full ${mtavruli.className}`}>{locale == "en" ? "Page not found" : "გვერდი ვერ მოიძებნა"}</h1>
      <span className="text-gray-600 mb-6">
      {locale == "en" ? "It looks like this page took a vacation. But do not worry, we have got plenty of other cool stuff for you!" : "როგორც ჩანს, გვერდი, რომელსაც ეძებდით შვებულებაშია. მაგრამ არ ინერვიულო, ბევრი კარგი რამ გელოდება უკან"}
      </span>
      <Link href={"/"}
        className="w-[180px] px-4 py-2 text-md font-medium text-center text-white bg-[#1e90ff] rounded-md mt-[16px]"
      > {locale == "en" ? "Return" : "უკან დაბრუნება"}
      </Link>
    </div>
  );
}

import Image from "next/image";
import { useLocale } from "next-intl";

interface BannerProps {
  bannerKa: string;
  bannerEn: string;
}

function Banner({ bannerKa, bannerEn }: BannerProps) {
  const locale = useLocale();

  return (
    <section className="w-[100%]  flex gap-2 mt-[40px]">
      <div className="flex-1 rounded-[15px] w-full">
        <Image src={locale === "en" ? bannerEn : bannerKa} width={1266} height={314} unoptimized alt="First Banner" className="w-[100%] rounded-[15px]" />
      </div>
    </section>
  );
}

export default Banner;

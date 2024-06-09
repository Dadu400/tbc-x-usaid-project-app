import Image from "next/image";
import FirstBanner from "../../public/firstBanner.png";
import FirstBannerEn from "../../public/firstBannerEn.png";
import { useLocale } from "next-intl";

function Banner() {
  const locale = useLocale();

  return (
    <section className="w-[100%]  flex gap-2 mt-[40px]">
      <div className="flex-1 rounded-[15px] w-full">
        <Image src={locale === "en" ? FirstBannerEn : FirstBanner} alt="First Banner" className="w-[100%] rounded-[15px]" />
      </div>
    </section>
  );
}

export default Banner;

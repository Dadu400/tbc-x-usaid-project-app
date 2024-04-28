import Image from "next/image";
import MarioImage from "../icons/Mario100.jpeg";
import SuperMarioLogo from "../icons/SuperMarioLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

function Banner() {
  const t = useTranslations("Banner");
  const sectionStyle = {
    backgroundImage: `url(${MarioImage.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <section className="w-full h-[500px]" style={sectionStyle}>
      <div className="p-[120px] flex flex-col gap-[22px]">
        <Image src={SuperMarioLogo} alt="superMario" width={100} height={100} />
        <h1 className="text-[32px] font-semibold">{t("title")}</h1>
        <div className="w-[380px] text-[18px] font-medium">
          {t("offerDetails")}
        </div>
        <div className="flex gap-4">
          <button className="bg-black text-white font-medium hover:bg-white hover:text-black py-2 px-4 rounded flex items-center">
            {t("shopNow")}
            <FontAwesomeIcon
              icon={faAngleRight}
              className="w-5 h-5 ml-2 pt-1"
            />
          </button>
          <button className="bg-black text-white font-medium hover:bg-white hover:text-black py-3 px-4 rounded flex items-center">
            {t("becomeMember")}
            <FontAwesomeIcon
              icon={faAngleRight}
              className="w-5 h-5 ml-2 pt-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;

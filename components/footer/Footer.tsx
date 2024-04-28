import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#201D48] w-full mt-auto">
      <div className="flex flex-col px-[40px] py-[30px] gap-[28px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-white font-bold uppercase">
              {t("subscribeHeader")}
            </h3>
            <div className="relative">
              <form action="#">
                <div className="flex items-center justify-center">
                  <input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    className="w-full h-[40px] rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 px-4 py-2 bg-[#FD8024] text-white font-bold rounded-md shadow-sm hover:bg-orange-200 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] mr-4">
            <h3 className="text-white font-bold uppercase">
              {t("followUsHeader")}
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/LEGO/"
                className="text-white hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
              </Link>
              <Link
                href="https://twitter.com/LEGO_Group"
                className="text-white hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.instagram.com/lego"
                className="text-white hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.youtube.com/user/LEGO?app=desktop"
                className="text-white hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <ul className="flex gap-4">
            <li className="text-white text-xs">
              <Link href="https://www.lego.com/en-us/legal/notices-and-policies/privacy-policy">
                {t("privacyPolicy")}
              </Link>
            </li>
            <li className="text-white text-xs">
              <Link href="https://www.lego.com/en-us/cookie-policy">
                {t("cookies")}
              </Link>
            </li>
            <li className="text-white text-xs">
              <Link href="https://www.lego.com/en-us/legal/notices-and-policies/legal-notice">
                {t("termsOfUse")}
              </Link>
            </li>
            <li className="text-white text-xs">
              <Link href="https://www.lego.com/en-us/page/accessibility">
                {t("accessibility")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white text-xs">{t("legalDisclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

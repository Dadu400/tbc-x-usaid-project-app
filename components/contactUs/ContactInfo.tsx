import ContactForm from "./ContactForm";
import ContactImage from "../../public/contact.png";
import Image from "next/image";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import ContactData from "./ContactData";
import { useTranslations } from 'next-intl';
import localFont from "@next/font/local";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' });

function ContactInfo() {
  const t = useTranslations("ContactInfo")
  return (
    <section className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] m-auto my-[40px] flex gap-[25px] items-start bg-[#fefefe] dark:bg-[#1D2024] dark:border dark:border-[#ffffff1f] shadow-2xl rounded-lg p-[50px]">
      <div className="flex-1 flex flex-col">
        <h2 className={`text-2xl font-semibold uppercase ${mtavruli.className} mb-[10px] text-[#EC6652]`}>{t("header")}</h2>
        <h4 className="text-md mb-[30px]">{t("text")}</h4>
        <ContactForm />
      </div>
      <div className="flex-1 hidden lg:flex flex-col items-center">
        <Image src={ContactImage} alt="Contact Image" className="w-[70%]  " />
        <div className="flex flex-col gap-[10px]">
          <ContactData icon={<FmdGoodOutlinedIcon className="text-[#404978] text-2xl" />} data={t("address")} />
          <ContactData icon={<LocalPhoneOutlinedIcon className="text-[#404978] text-2xl" />} data={"+995 558 63 20 21"} />
          <ContactData icon={<AlternateEmailOutlinedIcon className="text-[#404978] text-2xl" />} data={"contact@superapp.com"} />
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

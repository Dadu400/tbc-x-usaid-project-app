import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import ContactImage from "../../public/contact.jpg";
import Image from "next/image";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import ContactData from "./ContactData";

function ContactInfo() {
  const t = useTranslations("ContactInfo");

  return (
    <section className="w-[60vw] m-auto mt-[20px] flex gap-[25px] items-start bg-[#fefefe] shadow-2xl rounded-lg p-[50px]">
      <div className="flex-1 flex flex-col">
        <h2 className="text-2xl font-semibold font-['mtavruli'] mb-[10px] text-red">დაგვიკავშირდით</h2>
        <h4 className="text-md mb-[30px]">ყოველთვის გვიხარია თქვენთან კომუნიკაცია! ❤️</h4>
        <ContactForm />
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Image src={ContactImage} alt="Contact Image" className="w-[70%]  " />
        <div className="flex flex-col gap-[10px]">
          <ContactData icon={<FmdGoodOutlinedIcon className="text-[#404978] text-2xl" />} data={"ათონელის ქუჩა N31"} />
          <ContactData icon={<LocalPhoneOutlinedIcon className="text-[#404978] text-2xl" />} data={"+995 558 63 20 21"} />
          <ContactData icon={<AlternateEmailOutlinedIcon className="text-[#404978] text-2xl" />} data={"contact@superapp.com"} />
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

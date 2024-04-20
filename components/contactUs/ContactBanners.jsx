import Image from "next/image";
import ContactForm from "./ContactForm";
import LegoEcho from "@/components/icons/LegoEcho.png";
import LegoEchoSophia from "@/components/icons/LegoEchoSophia.png";

function ContactBanners() {
  return (
    <>
      <section className="w-full bg-[#78BFEA] dark:bg-blue-950 min-h-[400px]">
        <div className="flex justify-center items-center">
          <div className="flex flex-col flex-1 items-center  gap-[10px]">
            <h2 className="text-[32px] font-bold dark:text-white">Contact Us</h2>
            <p className="text-[28px] dark:text-white">Sophia can help with lots of topics</p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image src={LegoEcho} alt="Sophia" />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#00AF4D] dark:bg-green-950 min-h-[400px] py-6">
        <div className="flex">
          <div className="flex flex-1 items-center justify-center">
            <Image src={LegoEchoSophia} alt="Sophia" />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default ContactBanners;

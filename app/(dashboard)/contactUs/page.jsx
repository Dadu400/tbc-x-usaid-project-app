import DashboardLayout from "@/app/(dashboard)/DashboardLayout";
import Image from "next/image";
import ContactForm from "../../../components/contactUs/ContactForm";
import ContactInfo from "../../../components/contactUs/ContactInfo";
import LegoEcho from "@/components/icons/LegoEcho.png";
import LegoEchoSophia from "@/components/icons/LegoEchoSophia.png";

function Contacts() {
  return (
    <DashboardLayout>
      <ContactInfo />
      <section className="w-full bg-[#78BFEA] min-h-[400px]">
        <div className="flex justify-center items-center">
          <div className="flex flex-col flex-1 items-center  gap-[10px]">
            <h2 className="text-[32px] font-bold">Contact Us</h2>
            <p className="text-[28px]">Sophia can help with lots of topics</p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image src={LegoEcho} alt="Sophia" />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#00AF4D] min-h-[400px] py-6">
        <div className="flex">
          <div className="flex flex-1 items-center justify-center">
            <Image src={LegoEchoSophia} alt="Sophia" />
          </div>
          <ContactForm />
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Contacts;
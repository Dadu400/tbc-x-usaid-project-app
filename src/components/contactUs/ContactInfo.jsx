function ContactInfo() {
  return (
    <section className="flex flex-col gap-[20px] w-full px-16 py-10">
      <h1 className="text-[32px] font-bold self-center mb-10">
        Get in touch with a LEGO expert
      </h1>
      <div className="flex">
        <div className="flex flex-1 flex-col gap-[10px] border-r-2 pl-16">
          <h2 className="text-[22px] font-bold">Call us</h2>
          <div className="flex flex-col gap-[6px]">
            <h6 className="text-[18px]">LEGO® Customer Service in English</h6>
            <p className="underline text-cyan-600 cursor-pointer">1-844-903-5346</p>
            <p className="text-[18px]">Monday to Friday 8am - 10pm ET</p>
            <p className="text-[18px]">Saturday to Sunday 10am - 6pm ET</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h6 className="text-[18px]">LEGO® Customer Service in Spanish</h6>
            <p className="underline text-cyan-600 cursor-pointer">1-833-692-5346</p>
            <p className="text-[18px]">Monday to Friday 8am - 10pm ET</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h6 className="text-[18px]">LEGO® Education Tech Support</h6>
            <p className="underline text-cyan-600 cursor-pointer">1-866-349-5346</p>
            <p className="text-[18px]">Monday to Friday 8am - 10pm ET</p>
          </div>
          <p className="text-[18px] w-4/5">
            Our free number might be blocked by some providers. You may be
            charged when calling from a mobile phone. Please contact your
            provider for more details.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-[6px] pl-16">
          <h2 className="text-[22px] font-bold">Write to us</h2>
          <div className="flex flex-col gap-[4px]">
            <h6 className="text-[18px]">LEGO® Customer Service</h6>
            <p className="text-[18px]">PO Box 1138</p>
            <p className="text-[18px]">Enfield</p>
            <p className="text-[18px]">CT 06083-1138</p>
            <p className="text-[18px]">USA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

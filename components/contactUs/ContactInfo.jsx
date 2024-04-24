import { useTranslations } from "next-intl";

function ContactInfo() {
  const t = useTranslations("ContactInfo");

  return (
    <section className="flex flex-col gap-[20px] w-full px-16 py-10 dark:bg-black">
      <h1 className="text-[32px] font-bold self-center mb-10 dark:text-white">
        {t("header")}
      </h1>
      <div className="flex">
        <div className="flex flex-1 flex-col gap-[10px] border-r-2 pl-16">
          <h2 className="text-[22px] font-bold dark:text-white">
            {t("callUs")}
          </h2>
          <div className="flex flex-col gap-[6px]">
            <h6 className="text-[18px] dark:text-white">
              {t("customerServiceEnglish")}
            </h6>
            <p className="underline text-cyan-600 cursor-pointer dark:text-white">
              {t("numberEnglish")}
            </p>
            <p className="text-[18px] dark:text-white">{t("hoursWeekdaysEnglish")}</p>
            <p className="text-[18px] dark:text-white">{t("hoursWeekendEnglish")}</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h6 className="text-[18px] dark:text-white">
              {t("customerServiceSpanish")}
            </h6>
            <p className="underline text-cyan-600 cursor-pointer">
              {t("numberSpanish")}
            </p>
            <p className="text-[18px] dark:text-white">{t("hoursWeekdaysSpanish")}</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h6 className="text-[18px] dark:text-white">{t("techSupport")}</h6>
            <p className="underline text-cyan-600 cursor-pointer">
              {t("numberTechSupport")}
            </p>
            <p className="text-[18px] dark:text-white">{t("hoursWeekdaysTechSupport")}</p>
          </div>
          <p className="text-[18px] w-4/5 dark:text-white">
          {t("note")}
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-[6px] pl-16">
        <h2 className="text-[22px] font-bold dark:text-white">{t('WriteUs')}</h2>
          <div className="flex flex-col gap-[4px]">
          <h6 className="text-[18px] dark:text-white">{t('customerServiceHeader')}</h6>
            <p className="text-[18px] dark:text-white">{t('addressLine1')}</p>
            <p className="text-[18px] dark:text-white">{t('addressCity')}</p>
            <p className="text-[18px] dark:text-white">{t('addressStateZip')}</p>
            <p className="text-[18px] dark:text-white">{t('addressCountry')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

import { useTranslations } from "next-intl";

function ContactForm() {
  const t = useTranslations("ContactForm");

  return (
    <div className="flex flex-1 items-center justify-center">
      <form action="#" className="flex flex-col w-[40%]">
        <div className="mb-3">
          <input
            type="text"
            placeholder={t("namePlaceholder")}
            className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder={t("surnamePlaceholder")}
            className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder={t("mobilePlaceholder")}
            className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none appearance-none"
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
            }}
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            rows="5"
            placeholder={t("problemPlaceholder")}
            className="focus:outline-none focus:ring w-full px-3 py-4 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow resize-none h-40"
            required
          />
        </div>
        <button
          type="submit"
          className="w-[40%] py-2 bg-black self-center text-white font-large hover:bg-white hover:text-black rounded"
          required
        >
          {t("sendButton")}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

import { useTranslations } from "next-intl";

const UserRegistrationForm = () => {
  const t = useTranslations("Register");
  return (
    <form className="flex flex-col w-[40%] p-8 bg-white dark:bg-stone-900 shadow-lg rounded-lg gap-2">
      <label htmlFor="userName" className="dark:text-white">
        {t("formLabelUserName")}
      </label>
      <input
        type="text"
        name="userName"
        id="userName"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        placeholder={t("inputPlaceholderUserName")}
        required
      />

      <label htmlFor="surname" className="dark:text-white">
        {t("formLabelSurname")}
      </label>
      <input
        type="text"
        name="surname"
        id="surname"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        placeholder={t("inputPlaceholderSurname")}
        required
      />

      <label htmlFor="email" className="dark:text-white">
        {t("formLabelEmail")}
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        placeholder={t("inputPlaceholderEmail")}
        required
      />
      <label htmlFor="password" className="dark:text-white">
        {t("formLabelCreatePassword")}
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        placeholder={t("inputPlaceholderPassword")}
        required
      />

      <label htmlFor="confirmPassword" className="dark:text-white">
        {t("formLabelConfirmPassword")}
      </label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        placeholder={t("inputPlaceholderConfirmPassword")}
        required
      />
      <button
        type="submit"
        className="mt-4 inline-flex justify-center py-3 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-[#FD8024] dark:hover:bg-yellow-200 hover:bg-transparent hover:text-[#FD8024] focus:outline-none transition duration-150 ease-in-out"
      >
        {t("buttonRegister")}
      </button>
    </form>
  );
};

export default UserRegistrationForm;

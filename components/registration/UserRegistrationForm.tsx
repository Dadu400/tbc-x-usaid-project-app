import { useTranslations } from "next-intl";

const UserRegistrationForm = () => {


  const t = useTranslations("Register");
  return (
    <div className="px-8 pt-6 pb-8 bg-white rounded shadow-2xl dark:bg-black">
      <h2 className="text-xl font-['mtavruli'] font-semibold mb-[20px] text-center w-full">რეგისტრაცია</h2>
      <form autoComplete='off' className="flex flex-col space-y-4">
        <div className='w-[350px]'>
          <label htmlFor="email" className="block text-md font-medium text-gray-700 dark:text-white">
            მომხარებლის სახელი
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:red sm:text-sm"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-md font-medium text-gray-700 dark:text-white">
            მომხარებლის პაროლი
          </label>
          <input
            type="password"
            id="password"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          // onClick={handleSubmit}
          className="w-full px-4 py-2 text-md font-medium text-white bg-red rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          რეგისტრაცია
        </button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;

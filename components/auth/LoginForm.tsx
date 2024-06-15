"use client"

import React, { useState } from 'react';
import { useLocale } from "next-intl";
import { Login } from '../../actions';
import localFont from '@next/font/local';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' });

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const locale = useLocale();

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const response = await Login(email, password);
    if (!response.ok) {
      setError("არასწორი მეილი ან პაროლი");
    }
  };

  return (
    <div className="px-8 pt-6 pb-8 bg-white rounded shadow-2xl dark:bg-black">
      <h2 className={`text-xl font-semibold ${mtavruli.className} mb-[20px] text-center w-full`}>ავტორიზაცია</h2>
      <form autoComplete='off' className="flex flex-col space-y-4">
        <div className='w-[350px]'>
          <label htmlFor="email" className="block text-md font-medium text-gray-700 dark:text-white">
            {locale == "en" ? "Email" : "მომხარებლის მეილი"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:red sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative w-[350px]">
          <label htmlFor="password" className="block text-md font-medium text-gray-700 dark:text-white">
            {locale == "en" ? "Password" : "მომხარებლის პაროლი"}
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute bottom-2 right-2 flex items-center text-sm leading-5"
          >
            {isPasswordVisible ? <VisibilityOffIcon fontSize="small" className="text-gray-400" /> : <VisibilityIcon fontSize="small" className="text-gray-400" />}
          </button>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full px-4 py-2 text-md font-medium text-white bg-red rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          {locale == "en" ? "Log In" : "შესვლა"}
        </button>
      </form>
      <div className='h-4 pt-3'>
        {error && <p className="text-red text-center">{error}</p>}
      </div>
    </div>
  );
}

export default LoginForm;

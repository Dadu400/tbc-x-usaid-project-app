"use client"

import React, { useState } from 'react';
import { useLocale } from "next-intl";

interface LoginFormProps {
  handleLogin: (email: string, password: string) => void;
}

function LoginForm({ handleLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const locale = useLocale();

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="p-8 bg-white rounded shadow-md dark:bg-black">
      <form autoComplete='off' className="flex flex-col space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
          {locale == "en" ? "Username" : "მომხარებლის სახელი"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white">
          {locale == "en" ? "Password" : "მომხარებლის პაროლი"}
          </label>
          <input
            type="password"
            id="password"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {locale == "en" ? "Log In" : "შესვლა"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

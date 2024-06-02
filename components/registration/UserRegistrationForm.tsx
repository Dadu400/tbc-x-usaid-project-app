"use client";

import { useState } from "react";
import Image from "next/image";
import DefaultImage from "../../public/person.png";
import UploadIcon from '@mui/icons-material/Upload';

const UserRegistrationForm = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="px-8 pt-6 pb-8 bg-white rounded shadow-2xl">
      <h2 className="text-xl font-['mtavruli'] font-semibold mb-[20px] text-center w-full">რეგისტრაცია</h2>
      <Image src={selectedImage || DefaultImage} id="registrationImage" alt="user" width={120} height={30} className="mx-auto rounded-full border-2 cursor-pointer w-[120px] h-[120px]" />
      <form autoComplete='off' className="flex flex-col space-y-4 mt-[10px]">
        <div className='w-[80%] flex items-center my-2 self-center'>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <label htmlFor="image" className="flex items-center cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3">
            <UploadIcon className="text-red mr-2" />
            <span className="block text-md font-medium text-gray-700">ატვირთე პროფილის სურათი</span>
          </label>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-white via-red to-white"> </div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="ელ. ფოსტა"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
        />
        <input
          type="password"
          id="password"
          placeholder="პაროლი"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
        />
        <div className="flex items-center justify-between">
          <input
            type="text"
            id="name"
            placeholder="სახელი"
            required
            className="w-[40%] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
          />
          <input
            type="text"
            id="surname"
            placeholder="გვარი"
            required
            className="w-[56%] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
          />
        </div>
        <input
          type="text"
          id="address"
          placeholder="მისამართი"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
        />
        <input
          type="text"
          id="phone"
          placeholder="ტელეფონი"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-md font-medium text-white bg-red rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
          რეგისტრაცია
        </button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;

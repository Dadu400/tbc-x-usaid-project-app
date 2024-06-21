'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import DefaultImage from "../../public/person.png";
import UploadIcon from '@mui/icons-material/Upload';
import { Register } from "../../actions";
import type { PutBlobResult } from '@vercel/blob';
import { useRouter } from "next/navigation";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useLocale } from "next-intl";

const UserRegistrationForm = () => {
  const router = useRouter();
  const locale = useLocale();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedImage == null) {
      setErrorMessage('აირჩიეთ პროფილის სურათი');
      return;
    }

    const response = await fetch(`/api/upload?filename=${selectedImage.name}`, {
      method: 'POST',
      body: selectedImage,
    });

    const newBlob = (await response.json()) as PutBlobResult;

    const formData = {
      email,
      password,
      name,
      surname,
      address,
      phone,
      imageUrl: newBlob.url,
    };

    const registrationStatus = await Register(formData);
    if (registrationStatus.ok) {
      router.push('/login');
    } else {
      if (registrationStatus.message) {
        setErrorMessage(registrationStatus.message);
      } else {
        setErrorMessage('რეგისტრაცია ვერ მოხერხდა, სცადეთ მოგვიანებით');
      }
    }
  };

  return (
    <div className="px-8 pt-6 pb-8 bg-white rounded shadow-2xl">
      <h2 className="text-xl font-['mtavruli'] font-semibold mb-[20px] text-center w-full">{locale == "en" ? "Sign Up" : "რეგისტრაცია"}</h2>
      <Image src={selectedImage ? URL.createObjectURL(selectedImage) : DefaultImage} id="registrationImage" alt="user" width={120} height={30} className="mx-auto rounded-full border-2 cursor-pointer w-[120px] h-[120px]" />
      <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-4 mt-[10px]">
        <div className='w-[80%] flex self-center my-2'>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="hidden"
            ref={inputFileRef}
            onChange={handleImageChange}
          />
          <label htmlFor="image" className="flex items-center cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2">
            <UploadIcon className="text-red mr-2" />
            <span className="block text-md font-medium text-gray-700">{locale == "en" ? "Upload Profile Image" : "ატვირთე პროფილის სურათი"}</span>
          </label>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-white via-red to-white"></div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={locale == "en" ? "Email" : "ელ. ფოსტა"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
        />
        <div className="relative mt-1 block w-full">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            placeholder={locale == "en" ? "Password" : "პაროლი"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            {isPasswordVisible ? <VisibilityOffIcon fontSize="small" className="text-gray-400" /> : <VisibilityIcon fontSize="small" className="text-gray-400" />}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="text"
            id="name"
            name="name"
            placeholder={locale == "en" ? "Name" : "სახელი"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-[40%] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
          />
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder={locale == "en" ? "Surname" : "გვარი"}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            className="w-[56%] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
          />
        </div>
        <input
          type="text"
          id="address"
          name="address"
          placeholder={locale == "en" ? "Address" : "მისამართი"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
        />
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder={locale == "en" ? "Mobile Number" : "მობილური"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          inputMode="numeric"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 mt-2 text-md font-medium text-white bg-red rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
          {locale == "en" ? "Sign Up" : "რეგისტრაცია"}
        </button>
      </form>
      <div className='h-2'>
        {errorMessage && <p className="text-red text-center">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default UserRegistrationForm;

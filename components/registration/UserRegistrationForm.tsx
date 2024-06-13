'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import DefaultImage from "../../public/person.png";
import UploadIcon from '@mui/icons-material/Upload';
import { Register } from "../../actions";
import type { PutBlobResult } from '@vercel/blob';
import { useRouter } from "next/navigation";

const UserRegistrationForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      image: newBlob.url,
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
      <h2 className="text-xl font-['mtavruli'] font-semibold mb-[20px] text-center w-full">რეგისტრაცია</h2>
      {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}
      <Image src={selectedImage ? URL.createObjectURL(selectedImage) : DefaultImage} id="registrationImage" alt="user" width={120} height={30} className="mx-auto rounded-full border-2 cursor-pointer w-[120px] h-[120px]" />
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-[10px]">
        <div className='w-[80%] flex items-center my-2 self-center'>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="hidden"
            ref={inputFileRef}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="პაროლი"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
        />
        <div className="flex items-center justify-between">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="სახელი"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-[40%] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
          />
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="გვარი"
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
          placeholder="მისამართი"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
        />
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="ტელეფონი"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none"
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

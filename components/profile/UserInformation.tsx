'use client';

import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import UploadIcon from '@mui/icons-material/Upload';
import CheckIcon from '@mui/icons-material/Check';

import { useState } from "react";
import { UpdateUser } from "../../actions";
import { PutBlobResult } from "@vercel/blob";
import { useLocale } from "next-intl";

interface Message {
    ok: boolean;
    message: string;
}

function UserInformation({ session }: { session: any }) {
    const user = session.user;
    const locale = useLocale();

    const [message, setMessage] = useState<Message | undefined>(undefined);

    const [name, setName] = useState(user.name);
    const [surname, setSurname] = useState(user.surname);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);

    const [updatedImage, setUpdatedImage] = useState<File | undefined>(undefined);

    const [nameEnabled, setNameEnabled] = useState(false);
    const [surnameEnabled, setSurnameEnabled] = useState(false);
    const [addressEnabled, setAddressEnabled] = useState(false);
    const [phoneEnabled, setPhoneEnabled] = useState(false);

    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <h2 className="text-2xl font-['mtavruli'] font-semibold mb-[20px] text-center w-full">{locale == "en" ? "My Profile" : "ჩემი პროფილი"}</h2>
            <Image src={updatedImage !== undefined ? URL.createObjectURL(updatedImage) : user.imageurl} id="registrationImage" alt="user" width={120} height={30} className="mx-auto rounded-full border-2 cursor-pointer w-[120px] h-[120px]" />
            <form autoComplete='off' className="flex flex-col space-y-4 mt-[10px]" onSubmit={async (e) => {
                e.preventDefault();
                
                let imageUrl = user.imageurl;
                if (updatedImage) {
                    const response = await fetch(`/api/upload?filename=${updatedImage.name}`, {
                        method: 'POST',
                        body: updatedImage,
                    });
                
                    const newBlob = (await response.json()) as PutBlobResult;
                    imageUrl = newBlob.url;
                }

                const response = await UpdateUser({
                    email: user.email,
                    imageUrl,
                    name,
                    surname,
                    address,
                    phone,
                });
                
                if (response.ok) {
                    setMessage({ ok: true, message: "პროფილი შენახულია" });
                } else {
                    if (response.message) {
                        setMessage({ ok: false, message: response.message });
                    } else {
                        setMessage({ ok: false, message: "პროფილის შენახვა ვერ მოხერხდა" });
                    }
                }
                
            }}>
                <div className='w-[30%] flex items-center my-2 self-center'>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) {
                                setUpdatedImage(file);
                            }
                        }}
                    />
                    <label htmlFor="image" className="flex items-center cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3">
                        <UploadIcon className="text-[#404978] mr-2" />
                        <span className="block text-md font-medium text-gray-700">{locale == "en" ? "Change Profile Picture" : "შეცვალე სურათი"}</span>
                    </label>
                </div>
                {message ? <div className="w-full flex justify-center items-center">
                    <span className={`rounded px-8 py-1 text-white ${message.ok ? 'bg-[#388E3C]' : 'bg-[#EC6652]'}`}>{message.message}</span>
                </div> : <></>}
                <div className="h-[2px] bg-gradient-to-r from-white via-red to-white"> </div>
                <label htmlFor="email" className="block text-md font-medium text-gray-700">{locale == "en" ? "Email" : "ელ.ფოსტა"}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    readOnly
                    value={user.email}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                />
                <div className="flex items-center justify-between">
                    <div className="relative w-[40%]">
                        <label htmlFor="name" className="block text-md font-medium text-gray-700">{locale == "en" ? "Name" : "სახელი"}</label>
                        <input
                            type="text"
                            id="name"
                            required
                            {...nameEnabled ? { readOnly: false } : { readOnly: true }}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                        />
                        {!nameEnabled ? <EditIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" onClick={() => {
                            setNameEnabled(true);
                        }} /> : <></>}
                        {nameEnabled ? <CheckIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" onClick={() => {
                            setNameEnabled(false);
                        }}/> : <></>}
                    </div>
                    <div className="relative w-[56%]">
                        <label htmlFor="surname" className="block text-md font-medium text-gray-700">{locale == "en" ? "Surname" : "გვარი"}</label>
                        <input
                            type="text"
                            id="surname"
                            required
                            {...surnameEnabled ? { readOnly: false } : { readOnly: true }}
                            value={surname}
                            onChange={(e) => {
                                setSurname(e.target.value);
                            }}
                            className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                        />
                        {!surnameEnabled ? <EditIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" onClick={() => {
                            setSurnameEnabled(true);
                        }} /> : <></>}
                        {surnameEnabled ? <CheckIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" onClick={() => {
                            setSurnameEnabled(false);
                        }}/> : <></>}
                    </div>
                </div>
                <div className="relative">
                    <label htmlFor="address" className="block text-md font-medium text-gray-700">{locale == "en" ? "Address" : "მისამართი"}</label>
                    <input
                        type="text"
                        id="address"
                        required
                        {...addressEnabled ? { readOnly: false } : { readOnly: true }}
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                    />
                    {!addressEnabled ? <EditIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" onClick={() => {
                        setAddressEnabled(true);
                    }} /> : <></>}
                    {addressEnabled ? <CheckIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" onClick={() => {
                        setAddressEnabled(false);
                    }}/> : <></>}
                </div>
                <div className="relative">
                    <label htmlFor="phone" className="block text-md font-medium text-gray-700">{locale == "en" ? "Mobile Number" : "მობილურის ნომერი"}</label>
                    <input
                        type="text"
                        id="phone"
                        required
                        {...phoneEnabled ? { readOnly: false } : { readOnly: true }}
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                        className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                    />
                    {!phoneEnabled ? <EditIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" onClick={() => {
                        setPhoneEnabled(true);
                    }} /> : <></>}
                    {phoneEnabled ? <CheckIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" onClick={() => {
                        setPhoneEnabled(false);
                    }}/> : <></>}
                </div>

                <button
                    type="submit"
                    className="w-[40%] self-center px-4 py-3 text-md font-medium text-white bg-[#EC6652] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                    {locale == "en" ? "Save Changes" : "შენახვა"}
                </button>
            </form>
        </div>
    )
}

export default UserInformation;

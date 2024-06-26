"use client";

import { useState, useEffect } from 'react';
import { GetSession, HandleChangePassword } from "../../actions";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useLocale } from "next-intl";
import localFont from "@next/font/local";

const useSession = () => {
    const [userEmail, setUserEmail] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchSession = async () => {
            const session = await GetSession();
            const user: any = session !== undefined ? session.user : undefined;
            setUserEmail(user !== undefined ? user.email : undefined);
        };

        fetchSession();
    }, []);

    return userEmail;
};

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function ChangePassword() {
    const userEmail = useSession();
    const locale = useLocale();
    const [responseMessage, setResponseMessage] = useState('');
    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const oldPassword = formData.get('oldPassword')?.toString();
        const newPassword = formData.get('newPassword')?.toString();
        const confirmPassword = formData.get('confirmPassword')?.toString();

        const response = await HandleChangePassword(userEmail, oldPassword, newPassword, confirmPassword);
        setResponseMessage(response.message);

        if (response.message === 'პაროლი წარმატებით შეიცვალა') {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    };

    return (
        <div className="w-full flex flex-col border dark:border-[#ffffff1f] shadow-lg rounded-lg bg-[#FEFEFE] dark:bg-[#1D2024] p-8">
            <div className="flex flex-col items-center justify-center gap-y-8">
                <h2 className={`text-2xl ${mtavruli.className} uppercase font-semibold mb-[20px] text-center w-full`}>{locale == "en" ? "Change Password" : "პაროლის შეცვლა"}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col w-[400px] gap-y-4">
                    <label htmlFor="oldPassword" className="block text-md font-medium">{locale == "en" ? "Current Password" : "არსებული პაროლი"}</label>
                    <div className="relative">
                        <input
                            type={isOldPasswordVisible ? "text" : "password"}
                            name="oldPassword"
                            id="oldPassword"
                            className="block w-full px-3 py-3 bg-white dark:bg-[#1D2024] border border-gray-300 dark:border-[#ffffff1f] rounded-md shadow-sm focus:outline-none focus:red sm:text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => setIsOldPasswordVisible(!isOldPasswordVisible)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {isOldPasswordVisible ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                        </button>
                    </div>
                    <label htmlFor="newPassword" className="block text-md font-medium">{locale == "en" ? "New Password" : "ახალი პაროლი"}</label>
                    <div className="relative">
                        <input
                            type={isNewPasswordVisible ? "text" : "password"}
                            name="newPassword"
                            id="newPassword"
                            className="block w-full px-3 py-3 bg-white dark:bg-[#1D2024] border border-gray-300 dark:border-[#ffffff1f] rounded-md shadow-sm focus:outline-none focus:red sm:text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {isNewPasswordVisible ? <VisibilityOffIcon fontSize="small" className="text-gray-400" /> : <VisibilityIcon fontSize="small" className="text-gray-400" />}
                        </button>
                    </div>
                    <label htmlFor="confirmPassword" className="block text-md font-medium">{locale == "en" ? "Repeat new Password" : "დაადასტურე პაროლი"}</label>
                    <div className="relative">
                        <input
                            type={isConfirmPasswordVisible ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            className="block w-full px-3 py-3 bg-white dark:bg-[#1D2024] border border-gray-300 dark:border-[#ffffff1f] rounded-md shadow-sm focus:outline-none focus:red sm:text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {isConfirmPasswordVisible ? <VisibilityOffIcon fontSize="small" className="text-gray-400" /> : <VisibilityIcon fontSize="small" className="text-gray-400" />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-md mt-[18px] font-medium text-white bg-[#EC6652] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                        {locale == "en" ? "Save Changes" : "შენახვა"}
                    </button>
                </form>
                <div className='h-5'>
                    {responseMessage === 'პაროლის ცვლილება ვერ მოხერხდა' ? <span className="text-[#EC6652] text-md">{responseMessage}</span> : null}
                    {responseMessage === 'პაროლი წარმატებით შეიცვალა' ? <span className="text-green-500 text-md">{responseMessage}</span> : null}
                </div>
            </div>
        </div >
    )
}

export default ChangePassword;
"use client";
import { useState, useEffect } from 'react';
import { GetSession, HandleChangePassword } from "../../actions";

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

function ChangePassword() {
    const userEmail = useSession();
    const [responseMessage, setResponseMessage] = useState('');

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
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <div className="flex flex-col items-center justify-center gap-y-8">
                <h1 className="text-2xl HandleChangePassword-['mtavruli'] font-semibold">პაროლის შეცვლა</h1>
                <form onSubmit={handleSubmit} className="flex flex-col w-[40%] gap-y-4">
                    <label htmlFor="oldPassword" className="block text-md font-medium text-gray-700">ძველი პაროლი</label>
                    <input
                        type="password"
                        name="oldPassword"
                        id="oldPassword"
                        className="block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:red sm:text-sm"
                    />
                    <label htmlFor="newPassword" className="block text-md font-medium text-gray-700">ახალი პაროლი</label>
                    <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        className="block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:red sm:text-sm" />
                    <label htmlFor="confirmPassword" className="block text-md font-medium text-gray-700">დაადასტურე პაროლი</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:red sm:text-sm" />
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-md mt-[18px] font-medium text-white bg-red rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                        შენახვა
                    </button>
                </form>
                <div className='h-5'>
                    {responseMessage === 'პაროლის ცვლილება ვერ მოხერხდა' ? <span className="text-red-500 text-md">{responseMessage}</span> : null}
                    {responseMessage === 'პაროლი წარმატებით შეიცვალა' ? <span className="text-green-500 text-md">{responseMessage}</span> : null}
                </div>
            </div>
        </div >
    )
}

export default ChangePassword;
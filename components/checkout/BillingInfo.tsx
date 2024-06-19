"use client";

import { useState } from "react";
function BillingInfo() {

    const [selectedTime, setSelectedTime] = useState("");
    const [customDate, setCustomDate] = useState("");

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTime(event.target.value);
    };

    const handleCustomDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomDate(event.target.value);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 col-span-1 lg:col-span-2 flex flex-col">
            <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1 sm:col-span-2">
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium mb-1">
                            მისამართი
                        </label>
                        <input
                            id="address"
                            type="text"
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                        <label
                            htmlFor="additional-address"
                            className="block text-sm font-medium mb-1">
                            დამატებითი მისამართი
                        </label>
                        <input
                            id="additional-address"
                            type="text"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none"
                        />
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2 mt-4">
                    <label className="block text-sm font-medium mb-2">მიტანის დრო</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {["09:00 - 12:00", "12:00 - 15:00", "15:00 - 19:00", "19:00 - 22:00", "22:00 - 01:00"].map((time) => (
                            <label key={time} className="flex items-center space-x-2 bg-gray-100 rounded-xl p-3">
                                <input
                                    type="radio"
                                    name="delivery-time"
                                    value={time}
                                    checked={selectedTime === time}
                                    onChange={handleTimeChange}
                                    className="form-radio text-red-500"
                                />
                                <span className="text-sm">დღეს: {time}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2 mt-4">
                    <label
                        htmlFor="custom-date"
                        className="block text-sm font-medium mb-1">
                        ან აირჩიეთ სხვა დრო
                    </label>
                    <input
                        id="custom-date"
                        type="datetime-local"
                        value={customDate}
                        onChange={handleCustomDateChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none text-sm"
                    />
                </div>
                <div className="col-span-1 sm:col-span-2 mt-10 flex justify-center items-center mx-auto">
                    <textarea placeholder="დაუტოვე კომენტარი კურიერს" rows={5} className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none" />
                </div>
                <button type="submit" className="mt-6 text-white text-md py-2 px-4 rounded-xl bg-[#EC6652] flex justify-center">
                    შემდეგი
                </button>
            </form>
        </div>
    );
}

export default BillingInfo;

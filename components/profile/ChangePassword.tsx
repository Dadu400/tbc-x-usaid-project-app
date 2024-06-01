function ChangePassword() {
    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <div className="flex flex-col items-center justify-center gap-y-8">
                <h1 className="text-2xl font-['mtavruli'] font-semibold">პაროლის შეცვლა</h1>
                <form action="" className="flex flex-col w-[40%] gap-y-4">
                    <label htmlFor="password" className="block text-md font-medium text-gray-700">ახალი პაროლი</label>
                    <input
                        type="password"
                        name="new_password"
                        id="new_password"
                        className="block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:red sm:text-sm" />
                    <label htmlFor="password" className="block text-md font-medium text-gray-700">დაადასტურე პაროლი</label>
                    <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        className="block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:red sm:text-sm" />
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-md mt-[18px] font-medium text-white bg-red rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    > შენახვა
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword;
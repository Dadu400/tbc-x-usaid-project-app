import { GetSession } from "../../actions";

async function ContactInfo() {
    const session = await GetSession();
    const user = session?.user as { email: string; phone: string; name: string; surname: string; address: string };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 col-span-1 lg:col-span-2 flex flex-1 flex-col">
            <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium mb-1">
                            სახელი*
                        </label>
                        <input id="firstName" type="text" required value={user.name} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red" />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium mb-1">
                            გვარი*
                        </label>
                        <input id="lastName" type="text" required value={user.surname} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            მეილი
                        </label>
                        <input
                            id="email"
                            type="email"
                            readOnly
                            value={user.email}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            საკონტაქტო ნომერი*
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={user.phone}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                        />
                    </div>
                </div>
                <button type="submit" className="mt-8 text-white text-md py-2 px-4 rounded-xl bg-[#EC6652] flex justify-center">
                    შემდეგი
                </button>
            </form>
        </div>
    );
}

export default ContactInfo;

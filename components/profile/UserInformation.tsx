import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import UploadIcon from '@mui/icons-material/Upload';

function UserInformation({ session }: { session: any }) {
    const user = session.user;

    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <h2 className="text-2xl font-['mtavruli'] font-semibold mb-[20px] text-center w-full">ჩემი პროფილი</h2>
            <Image src={user.imageurl} id="registrationImage" alt="user" width={120} height={30} className="mx-auto rounded-full border-2 cursor-pointer w-[120px] h-[120px]" />
            <form autoComplete='off' className="flex flex-col space-y-4 mt-[10px]">
                <div className='w-[30%] flex items-center my-2 self-center'>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="hidden"
                    />
                    <label htmlFor="image" className="flex items-center cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3">
                        <UploadIcon className="text-[#404978] mr-2" />
                        <span className="block text-md font-medium text-gray-700">შეცვალე სურათი</span>
                    </label>
                </div>
                <div className="h-[2px] bg-gradient-to-r from-white via-red to-white"> </div>
                <label htmlFor="email" className="block text-md font-medium text-gray-700">ელ. ფოსტა</label>
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
                        <label htmlFor="name" className="block text-md font-medium text-gray-700">სახელი</label>
                        <input
                            type="text"
                            id="name"
                            required
                            readOnly
                            value={user.name}
                            className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                        />
                        <EditIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" />
                    </div>
                    <div className="relative w-[56%]">
                        <label htmlFor="surname" className="block text-md font-medium text-gray-700">გვარი</label>
                        <input
                            type="text"
                            id="surname"
                            required
                            readOnly
                            value={user.surname}
                            className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                        />
                        <EditIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" />
                    </div>
                </div>
                <div className="relative">
                    <label htmlFor="address" className="block text-md font-medium text-gray-700">მისამართი</label>
                    <input
                        type="text"
                        id="address"
                        required
                        readOnly
                        value={user.address}
                        className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                    />
                    <EditIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" />
                </div>
                <div className="relative">
                    <label htmlFor="phone" className="block text-md font-medium text-gray-700">მობილურის ნომერი</label>
                    <input
                        type="text"
                        id="phone"
                        required
                        readOnly
                        value={user.phone}
                        className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
                    />
                    <EditIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" />
                </div>

                <button
                    type="submit"
                    className="w-[40%] self-center px-4 py-3 text-md font-medium text-white bg-red rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                    შენახვა
                </button>
            </form>
        </div>
    )
}

export default UserInformation;

"use client"
import { useState } from "react";
import { User } from "../../helpers/axiosUsers";
import { updateUserAction } from "../../actions";

const EditUserModal = ({ setOpenModal, user }: { setOpenModal: (openModal: boolean) => void; user: User }) => {
  const [userData, setUserData] = useState({
    name: user.name || "",
    email: user.email || "",
    age: user.age || "",
    id: user.id || "" 
  });

  const { name, email, age } = userData;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await updateUserAction(formData);
      setOpenModal(false);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" id="name" name="id" value={user.id} onChange={handleChange}
              className="hidden mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
            <input type="number" id="age" name="age" value={age} onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
          </div>
          <div className="flex justify-end space-x-4">
            <button onClick={() => setOpenModal(false)} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;

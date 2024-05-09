import { createUserAction } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

interface AddUserModalProps {
  closeModal: () => void;
}

function AddUserModal({ closeModal }: AddUserModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative bg-white p-5 rounded-lg shadow-lg w-[400px]">
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Add New User</h2>
          <FontAwesomeIcon icon={faWindowClose} className="w-8 h-8 cursor-pointer" onClick={closeModal}/>
        </div>
        <form action={createUserAction}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-md w-full"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-md w-full"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              required
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-md w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="Enter age"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add User
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddUserModal;


'use client'

import { useState } from "react";
import AddUserModal from "./AddUserModal";

function AddUserButton() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="flex justify-end">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
        onClick={toggleModal}
      >
        Add User
      </button>
      {showModal && <AddUserModal closeModal={toggleModal} />}
    </div>
  );
}

export default AddUserButton;
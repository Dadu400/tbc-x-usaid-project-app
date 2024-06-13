// 'use client'

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";
// import EditUserModal from "./EditUserModal";
// import { User } from "../../helpers/axiosUsers";

// function EditUserButton({ user } : { user : User }) {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const toggleModal = () => {
//     setModalOpen(!isModalOpen);
//   };

//   return (
//     <>
//       <div className="whitespace-nowrap text-sm cursor-pointer">
//         <FontAwesomeIcon icon={faEdit} className="w-4 h-4" onClick={toggleModal}/>
//       </div>
//       {isModalOpen ? (
//         <EditUserModal setOpenModal={setModalOpen} user={user}/>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }

// export default EditUserButton;

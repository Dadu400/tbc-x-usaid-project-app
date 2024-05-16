"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function DeleteUserButton({
  id,
  deleteUser,
}: {
  id: number;
  deleteUser: (id: number) => void;
}) {
  return (
      <div className="whitespace-nowrap text-sm cursor-pointer">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="w-4 h-4 cursor-pointer"
          onClick={() => deleteUser(id)}
        />
      </div>
  );
}

export default DeleteUserButton;

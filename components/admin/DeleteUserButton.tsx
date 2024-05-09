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
      <td className="px-6 py-4 whitespace-nowrap text-sm cursor-pointer">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="w-4 h-4 ml-3 cursor-pointer"
          onClick={() => deleteUser(id)}
        />
      </td>
  );
}

export default DeleteUserButton;

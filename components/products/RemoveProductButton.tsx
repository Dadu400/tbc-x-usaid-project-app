"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { handleDeleteProduct } from "../../actions";

export default function RemoveProductButton({ id }: { id: string }) {
  return (
    <FontAwesomeIcon
      onClick={() => handleDeleteProduct(id)}
      icon={faTrashCan}
      className="w-4 h-6 cursor-pointer text-blue-500"
    />
  );
}
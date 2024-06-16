"use client";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { handleDeleteProduct } from "../../actions";

export default function RemoveProductButton({ id }: { id: string }) {
  return (
    <button
      className="text-sm font-regular text-red-600 flex items-center my-5"
      onClick={() => handleDeleteProduct(id)}
    >
      <DeleteOutlineIcon className="mr-2 text-[#EC6652] text-md" />
      წაშალე
    </button>
  );
}
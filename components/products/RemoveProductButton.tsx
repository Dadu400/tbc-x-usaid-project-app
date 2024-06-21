"use client";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { handleDeleteProduct } from "../../actions";
import { useLocale } from 'next-intl';

export default function RemoveProductButton({ id }: { id: string }) {
  const locale = useLocale();
  return (
    <button
      className="text-sm font-regular text-red-600 flex items-center my-5"
      onClick={() => handleDeleteProduct(id)}
    >
      <DeleteOutlineIcon className="mr-2 text-[#EC6652] text-md" />
      {locale == "en" ? "Remove" : "წაშალე"}
    </button>
  );
}
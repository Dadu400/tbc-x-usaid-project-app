"use client";

import { useState } from "react";
import { handleEmptyCart } from "../../actions";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useLocale } from 'next-intl';

export default function EmptyCartButton() {
  const locale = useLocale();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    handleEmptyCart();
    setTimeout(() => {
      setIsDeleting(false);
    }, 500);
  };

  return (
    <button
      onClick={handleDelete}
      className={`inline-flex items-center rounded-md bg-[#EC6652] px-4 py-2 text-md font-medium text-white shadow-sm transition-all duration-300 my-5 border border-red focus:outline-none focus:red focus:ring-offset-2 ${isDeleting ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
    >
      <DeleteOutlineIcon className="mr-2 h-5 w-5" />
      {locale == "en" ? "Empty Cart" : "კალათის გასუფთავება"}
    </button>
  );
}

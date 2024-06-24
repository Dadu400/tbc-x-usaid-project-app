"use client";

import { handleAddToCart, handleDecrementCart } from "../../actions";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function CounterButton({ id, quantity }: { id: string | number, quantity: number }) {
  return (
    <div className="flex items-center border rounded my-4">
      <button className="px-1 py-1">
        <RemoveIcon className="cursor-pointer" fontSize="small" onClick={() => handleDecrementCart(id.toString())} />
      </button>
      <span className="px-3 py-1 border-x text-md">{quantity}</span>
      <button className="px-1 py-1">
        <AddIcon className="cursor-pointer" fontSize="small" onClick={() => handleAddToCart(id.toString())} />
      </button>
    </div>
  );
}
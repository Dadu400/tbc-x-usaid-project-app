"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { handleAddToCart, handleDecrementCart } from "../../helpers/axiosProduct";

export default function CounterButton({ id }: { id: any }) {
    return (
        <div className="flex items-center border rounded ml-10">
            <button className="px-3 py-1">
                <FontAwesomeIcon icon={faMinus} className="cursor-pointer" onClick={() => handleDecrementCart(id.toString())} />
            </button>
            <button className="px-3 py-1">
                <FontAwesomeIcon icon={faPlus} className="cursor-pointer" onClick={() => handleAddToCart(id.toString())} />
            </button>
        </div>
    )
}

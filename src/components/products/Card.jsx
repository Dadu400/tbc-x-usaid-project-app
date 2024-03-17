function Card({ imageSrc, productName, price }) {
    return (
        <div className="flex flex-col gap-5">
            <div className="border border-solid border-gray-300 p-3 flex items-center justify-center">
                <img src={imageSrc} alt="product" className="w-54 h-48" />
            </div>
            <div className="flex flex-col items-start gap-4">
                <h3 className="text-black cursor-pointer font-medium text-base leading-6">{productName}</h3>
                <p className="font-bold text-lg leading-7">{price}</p>
                <button className="w-full inline-flex items-center justify-center bg-[#FD8024] border border-solid border-[#FD8024] rounded-sm px-4 py-3 font-medium text-lg leading-6 hover:bg-white transition-colors duration-300 ease-in-out">
                    Add to Bag
                </button>
            </div>
        </div>
    );
}

export default Card;

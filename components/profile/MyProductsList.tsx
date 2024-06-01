import ProductList from "../products/ProductList"


function MyProductsList() {
    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <h2 className="text-2xl font-['mtavruli'] font-semibold mb-[10px] text-center w-full">ჩემი პროდუქტები</h2>
            <ProductList addNewBtn={true} colCount={3} />
        </div>
    )
}

export default MyProductsList
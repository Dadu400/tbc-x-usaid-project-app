import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function AddNewProductCard() {
    return (
        <div className="flex items-center flex-col justify-center w-[190px] h-[265px] bg-red rounded-lg text-white gap-3 cursor-pointer">
            <AddOutlinedIcon className="text-3xl" />
            <div className="">ახალი პროდუქტი</div>
        </div>
    )
}

export default AddNewProductCard
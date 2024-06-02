import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function AddNewProductCard({ onClick }: { onClick: () => void }) {
    return (
        <div className="flex items-center flex-col justify-center w-[190px] h-[265px] bg-red rounded-lg text-white gap-3 cursor-pointer" onClick={() => { onClick(); }}>
            <AddOutlinedIcon className="text-3xl" />
            <div className="">ახალი პროდუქტი</div>
        </div>
    )
}

export default AddNewProductCard;
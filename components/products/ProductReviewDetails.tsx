import StarIcon from '@mui/icons-material/Star';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

function ProductReviewDetails() {
    return (
        <div>
            <div className="bg-[#FEFEFE] mt-[40px] flex w-[60vw] mx-auto shadow-xl p-[25px]">
                <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px] w-[135px]">
                    <StarIcon className="text-[#FFB200]" /> შეფასებებები
                </span>
            </div>
            <div className="bg-[#FEFEFE] my-[40px] flex w-[60vw] mx-auto shadow-xl p-[25px]">
                <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px] w-[135px]">
                    <InsertCommentOutlinedIcon className="text-red" /> კომენტარები
                </span>
            </div></div>
    )
}

export default ProductReviewDetails;
import Link from "next/link";


function SignUpSuggestion() {
    return (
        <div className="px-8 py-4 bg-white text-md rounded shadow-2xl w-full mt-[20px] flex justify-center items-center">
            არ გაქვს ანგარიში? <Link href="/registration" className="ml-1.5 font-semibold text-red">დარეგისტრირდი</Link>
        </div>
    );
}

export default SignUpSuggestion;
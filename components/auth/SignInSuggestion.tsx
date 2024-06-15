import Link from 'next/link';

function SignInSuggestion() {
    return (
        <div className="px-8 py-4 bg-white text-md rounded shadow-2xl w-full mt-[20px] flex justify-center items-center">
            გაქვს ანგარიში? <Link href="/login" className="ml-1.5 font-semibold text-red">გაიარე ავტორიზაცია</Link>
        </div>
    );
}

export default SignInSuggestion;
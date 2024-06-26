import Image from "next/image";
import SupermanLoader from "../../public/superman_loading.gif";

export default function Loading() {
  return (
    <main className="flex justify-center items-center h-screen bg-[#F9F9FF] dark:bg-[#121B18]">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center">
          <Image
            src={SupermanLoader}
            alt="not_found"
            unoptimized={true}
            width={460}
            height={460}
          />
        </div>
      </div>
    </main>
  );
}

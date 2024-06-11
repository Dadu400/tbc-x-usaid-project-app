import Image from 'next/image'
import NotFoundImg from '../../public/not_found.gif'
import localFont from '@next/font/local'

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function EmptySearch() {
    return (
        <div className="flex flex-col justify-center items-center py-[50px] opacity-[0.5]">
            <Image src={NotFoundImg} width={150} alt="Not Found" />
            <p className={`text-center text-lg ${mtavruli.className}`}>პროდუქტი არ მოიძებნა</p>
        </div>
    )
}

export default EmptySearch
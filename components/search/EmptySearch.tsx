import Image from 'next/image';
import NotFoundImg from '../../public/not_found.gif';
import localFont from '@next/font/local';
import { useLocale } from 'next-intl';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function EmptySearch() {
    const locale = useLocale();

    return (
        <div className="flex flex-col justify-center items-center py-[50px] opacity-[0.5]">
            <Image src={NotFoundImg} className="w-[200px]" alt="Not Found" />
            <p className={`text-center text-lg ${mtavruli.className}`}>
                {locale === 'ka' ? 'პროდუქტი არ მოიძებნა' : 'No results found with the given word'}
            </p>
        </div>
    )
}

export default EmptySearch
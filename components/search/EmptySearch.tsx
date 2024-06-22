import Image from 'next/image';
import NotFoundImg from '../../public/not_found.gif';
import localFont from '@next/font/local';
import { useTranslations } from 'next-intl';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function EmptySearch() {
    const t = useTranslations("SearchPage");

    return (
        <div className="flex flex-col justify-center items-center py-[50px] opacity-[0.5]">
            <Image src={NotFoundImg} className="w-[200px]" alt="Not Found" />
            <p className={`text-center text-lg ${mtavruli.className}`}>{t('notfound')}</p>
        </div>
    )
}

export default EmptySearch
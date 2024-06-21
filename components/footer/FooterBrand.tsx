import Image from 'next/image';
import SuperMan from '../../public/superman.svg';
import localFont from '@next/font/local';
import { useLocale } from 'next-intl';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function FooterBrand() {
    const locale = useLocale();
    return (
        <div className="w-[250px] flex flex-col gap-[15px] items-center">
            <div className="flex items-center justify-start gap-[10px]">
                <Image src={SuperMan} alt="Superman" width={40} height={40} />
                <span className={`text-xl font-['Open Sans'] ${mtavruli.className}`}>Super Web</span>
            </div>
            <div className="text-sm">
                @ SuperWeb. 2024. <br />
                {locale === 'en' ? 'All rights reserved.' : 'ყველა უფლება დაცულია.'}
            </div>
        </div>
    )
}

export default FooterBrand;
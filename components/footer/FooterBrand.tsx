import React from 'react'

import Image from 'next/image';
import SuperMan from '../../public/superman.svg';
import localFont from '@next/font/local'

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function FooterBrand() {
    return (
        <div className="w-[250px] flex flex-col gap-[15px] items-center">
            <div className="flex items-center justify-start gap-[10px]">
                <Image src={SuperMan} alt="Superman" width={40} height={40} />
                <span className={`text-xl font-['Open Sans'] ${mtavruli.className}`}>Super Web</span>
            </div>
            <div className="text-sm">
                @ SuperWeb. 2024. <br />
                All Rights reserved.
            </div>
        </div>
    )
}

export default FooterBrand
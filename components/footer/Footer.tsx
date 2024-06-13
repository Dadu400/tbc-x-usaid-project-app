"use client";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FooterBrand from './FooterBrand';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import localFont from '@next/font/local'

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function Footer() {

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F9F9FF] dark:bg-[#121B18] w-full mt-auto">
      <div className="w-full bg-[#EC6652] flex items-center justify-center cursor-pointer text-white" onClick={() => scrollUp()}>
        <KeyboardArrowUpIcon />
      </div>
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto my-[20px] bg-[#F9F9FF] dark:bg-[#121B18] flex gap-[25px] justify-center lg:justify-between">
        <FooterBrand />
        <div className="hidden lg:block bg-[#F9F9FF] dark:bg-[#121B18]">
          <span className={`font-semibold text-md ${mtavruli.className}`}>სამართლებრივი</span>
          <div className="flex flex-col gap-[10px] mt-[17px] bg-[#F9F9FF] dark:bg-[#121B18]">
            <span className={`cursor-pointer ${mtavruli.className} text-sm`}>წესები და პირობები</span>
            <span className={`cursor-pointer ${mtavruli.className} text-sm`}>კონფიდენციალურობის პოლიტიკა</span>
            <span className={`cursor-pointer ${mtavruli.className} text-sm`}>დაბრუნების პოლიტიკა</span>
          </div>
        </div>
        <div className="hidden lg:block bg-[#F9F9FF] dark:bg-[#121B18]">
          <span className={`font-semibold text-md ${mtavruli.className}`}>დახმარება</span>
          <div className="flex flex-col gap-[10px] mt-[17px] bg-[#F9F9FF] dark:bg-[#121B18]">
            <span className={`cursor-pointer ${mtavruli.className} text-sm`}>ხშირად დასმული კითხვები</span>
            <span className={`cursor-pointer ${mtavruli.className} text-sm flex items-center gap-[5px]`}>
              <LocalPhoneIcon fontSize='small' />
              +995 558 63 20 21
            </span>
            <span className={`cursor-pointer ${mtavruli.className} text-sm flex items-center gap-[5px]`}>
              <AlternateEmailIcon fontSize='small' />
              contact@superweb.com
            </span>
          </div>
        </div>
        <div className="hidden lg:block bg-[#F9F9FF] dark:bg-[#121B18]">
          <span className={`font-semibold text-md ${mtavruli.className}`}>სოციალური ქსელები</span>
          <div className="flex flex-col gap-[10px] mt-[17px] bg-[#F9F9FF] dark:bg-[#121B18]">
            <span className={`cursor-pointer ${mtavruli.className} text-sm flex items-center gap-[5px]`}>
              <FacebookIcon fontSize='small' className="text-[#316FF6]" />
              Facebook
            </span>
            <span className={`cursor-pointer ${mtavruli.className} text-sm flex items-center gap-[5px]`}>
              <InstagramIcon fontSize='small' className="text-[#FE1FA1]" />
              Instagram
            </span>
            <span className={`cursor-pointer ${mtavruli.className} text-sm flex items-center gap-[5px]`}>
              <YouTubeIcon fontSize='small' className="text-[#FF0000]" />
              Youtube
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

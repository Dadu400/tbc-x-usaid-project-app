import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function Footer() {
    return (
      <footer className="bg-[#201D48] w-full mt-auto">
        <div className="flex flex-col px-[40px] py-[30px] gap-[28px]">
          <div className="flex justify-between">
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-white font-bold uppercase">
              subscribe to lego shop emails
            </h3>
            <div className="relative">
              <form action="#">
                <div className="flex items-center justify-center">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-[40px] rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-opacity-50 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 px-4 py-2 bg-[#FD8024] text-white font-bold rounded-md shadow-sm hover:bg-orange-200 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] mr-4">
            <h3 className="text-white font-bold uppercase">follow us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/LEGO/" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
              </Link>
              <Link href="https://twitter.com/LEGO_Group" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
              </Link>
              <Link href="https://www.instagram.com/lego" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
              </Link>
              <Link href="https://www.youtube.com/user/LEGO?app=desktop" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faYoutube} className="w-8 h-8" />
              </Link>
            </div>
          </div>
          </div>
          <div className="flex">
              <ul className="flex gap-4">
                  <li className="text-white text-xs"><Link href="https://www.lego.com/en-us/legal/notices-and-policies/privacy-policy">Privacy Policy</Link></li>
                  <li className="text-white text-xs"><Link href="https://www.lego.com/en-us/cookie-policy">Cookies</Link></li>
                  <li className="text-white text-xs"><Link href="https://www.lego.com/en-us/legal/notices-and-policies/legal-notice">Terms of Use</Link></li>
                  <li className="text-white text-xs"><Link href="https://www.lego.com/en-us/page/accessibility">Accessibility</Link></li>
              </ul>
          </div>
          <div>
              <p className="text-white text-xs">LEGO System A/S, DK-7190 Billund, Denmark. Must be 18 years or older to purchase online. LEGO and the LEGO logo are trademarks of the LEGO Group. ©2024 The LEGO Group. All rights reserved. Use of this site signifies your agreement to the terms of use.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
import Link from 'next/link';
import LogoIcon from 'public/icons/logo.svg';
import SendIcon from 'public/icons/send.svg';

import { FOOTER_MENU } from 'config/constants';

const Footer = () => {
  return (
    <footer className="bg-primary px-6 pt-10 pb-[51px] text-center text-white xs:px-10 md:pt-14 md:text-left lg:pt-16 2xl:pt-[86px]">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1fr_200px_200px_200px]">
          <div className="mx-auto max-w-[400px] md:mx-0">
            <LogoIcon className="mx-auto h-[33px] w-[148px] fill-white md:mx-0" />
            <h3 className="mt-5 text-2xl sm:mt-7 lg:mt-10 lg:text-web-h3">Never miss an update!</h3>
            <p className="mt-3 text-mobile-p2 text-info">
              We are always updating our research and adding new stuff. Sign-up and always stay on top of our updates!
            </p>
            <div className="mt-3 flex justify-between space-x-3 rounded-full border border-info py-2.5 px-4 lg:py-3 lg:pl-6 lg:pr-[18px]">
              <input type="text" className="flex-1 bg-transparent text-web-p4" placeholder="Your Email Address" />
              <button type="button" className="flex-center h-9 w-9 rounded-full bg-white lg:h-[46px] lg:w-[46px]">
                <SendIcon />
              </button>
            </div>
          </div>

          {FOOTER_MENU.map(({ title, subMenu }) => (
            <div>
              <h4 className="text-2xl">{title}</h4>
              <div className="mt-4 space-y-4 text-info 2xl:space-y-6">
                {subMenu.map(({ text, url }) => (
                  <Link href={url}>
                    <a className="block text-mobile-p2">{text}</a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between border-t border-black border-opacity-10 pt-10 text-web-p4 text-info md:flex-row 3xl:mt-[76px] 3xl:pt-[31px]">
          <p className="mb-5 md:mb-0">Copyright 2010 - 2021 Examine Inc.</p>
          <Link href="/privary-policy">Privacy Policy I Website Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

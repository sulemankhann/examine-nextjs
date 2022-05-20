import Link from 'next/link';
import LogoIcon from 'public/icons/logo.svg';
import MenuIcon from 'public/icons/menu.svg';
import SearchIcon from 'public/icons/search.svg';

const Header = () => {
  return (
    <header className="flex h-[58px] items-center justify-between bg-primary pl-[11px] pr-5 xs:pl-4 xs:pr-6 sm:h-16 sm:pl-6 sm:pr-8 lg:h-[72px] lg:bg-white lg:pl-5 lg:pr-6 lg:shadow-header xl:pl-[25px] xl:pr-[35px] 2xl:h-20 3xl:h-[90px]">
      <div className="flex items-center lg:min-w-[220px] xl:min-w-[240px] 2xl:min-w-[321px]">
        <span className="flex-center mr-[9px] h-[30px] w-[33px] cursor-pointer rounded bg-primary-400 xs:mr-3 md:h-[34px] md:w-[37px] lg:hidden">
          <MenuIcon className="stroke-white md:h-5 md:w-6" />
        </span>
        <Link href="/">
          <LogoIcon className="md cursor-pointer fill-white md:h-5 md:w-[90px] lg:h-[26px] lg:w-[117px] lg:fill-primary 2xl:h-7 2xl:w-[126px] 3xl:h-[31px] 3xl:w-[140px]" />
        </Link>
      </div>

      <div className="hidden h-full flex-1 items-center space-x-[14px] shadow-inner lg:flex lg:pl-6 xl:pl-8 2xl:pl-10">
        <SearchIcon className="h-4 w-4 flex-shrink-0 fill-primary" />
        <input
          type="text"
          className="min-w-[415px] border-b border-purple-200 text-primary placeholder-primary"
          placeholder="What do you want to learn about?"
        />
      </div>

      <div className="hidden items-center justify-end lg:flex lg:min-w-[250px] lg:space-x-5 xl:min-w-[340px] xl:space-x-[23px] 2xl:min-w-[453px]">
        <Link href="/auth/login">
          <a className="text-[15px] leading-[-0.02em]">Login</a>
        </Link>
        <Link href="/auth/signup">
          <a className="rounded-full bg-premium px-5 py-2.5 text-web-p3 font-bold text-primary">Sign up</a>
        </Link>
        <MenuIcon className="cursor-pointer stroke-black" />
      </div>

      <SearchIcon className="h-4 w-4 fill-white md:h-5 md:w-5 lg:hidden" />
    </header>
  );
};

export default Header;

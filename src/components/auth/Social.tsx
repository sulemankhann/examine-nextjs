import cn from 'classnames';

interface ISocialLogin {
  socialPlatforms: {
    onClick: () => void;
    Child: React.FC<React.SVGProps<SVGSVGElement>> | string;
    className?: string;
  }[];
  wrapperClass?: string;
}

const btnCls =
  'flex-center h-7 w-9 cursor-pointer rounded-[3px] shadow-sm xs:h-9 xs:w-11 xs:rounded md:h-11 md:w-14 lg:rounded-md 3xl:h-[53px] 3xl:w-[68px] 3xl:rounded-lg';

const iconCls = 'xs:h-4 xs:w-4 md:h-5 md:w-5 3xl:h-[23px] 3xl:w-[23px]';

const textBtnCls =
  'text-[15px] font-bold leading-[18px] text-brand-fb xs:text-xl md:h-11 md:w-14 md:text-3xl 3xl:text-[40px] 3xl:leading-[48px]';

const SocialAuth: React.FC<ISocialLogin> = ({ socialPlatforms, wrapperClass }) => {
  return (
    <div className={cn('flex justify-center space-x-4', wrapperClass)}>
      {socialPlatforms.map(({ onClick, Child, className }) => (
        <button
          type="button"
          className={cn(btnCls, { [textBtnCls]: typeof Child === 'string' }, className)}
          onClick={onClick}
        >
          {typeof Child === 'string' ? Child : <Child className={iconCls} />}
        </button>
      ))}
    </div>
  );
};

export default SocialAuth;

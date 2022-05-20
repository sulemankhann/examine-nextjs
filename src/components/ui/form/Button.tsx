import cn from 'classnames';

interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'text-btn-sm py-1 px-2',
  md: 'text-btn-md py-1.5 px-3',
  lg: 'text-btn-lg py-2 px-4',
};

const Button: React.FC<IButtonProps> = ({ type = 'button', label, className, disabled, size = 'md', ...props }) => {
  return (
    <button
      className={cn(
        'w-full rounded bg-primary tracking-[0.01em] text-white hover:bg-examine-purple active:bg-primary-800',
        { '!bg-light': disabled },
        sizeClasses[size],
        className
      )}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

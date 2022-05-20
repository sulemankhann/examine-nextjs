import cn from 'classnames';
import { useState } from 'react';

// interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
  className,
  type = 'text',
  placeholder = 'Enter Here...',
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  return (
    <div className="relative">
      <input
        type={inputType}
        placeholder={placeholder}
        className={cn(
          'w-full rounded border border-gray-400 py-1.5 px-3 placeholder:text-gray-600 3xl:py-2 3xl:px-4',
          className
        )}
        {...props}
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold uppercase leading-[18px] text-primary-600"
          onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
        >
          {inputType === 'password' ? 'Show' : 'Hide'}
        </button>
      )}
    </div>
  );
};

export default Input;

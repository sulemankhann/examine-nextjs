import classNames from 'classnames';

interface ISepratorProps {
  text: string;
  className?: string;
}

const Seprator: React.FC<ISepratorProps> = ({ text, className }) => {
  return (
    <div className={classNames('flex items-center space-x-6', className)}>
      <span className="h-[1px] flex-1 flex-shrink-0 bg-line" />
      <span className="text-web-p4 leading-[22px] text-gray-700">{text}</span>
      <span className="h-[1px] flex-1 flex-shrink-0 bg-line" />
    </div>
  );
};

export default Seprator;

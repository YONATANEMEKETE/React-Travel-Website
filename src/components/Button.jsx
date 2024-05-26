import { FaArrowRight } from 'react-icons/fa';

const Button = ({ child, className }) => {
  return (
    <button
      className={`${
        className || ''
      } px-4 py-4 text-base font-first font-semibold bg-n-4 flex items-center justify-between gap-4 group`}
    >
      {child}
      <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
    </button>
  );
};

export default Button;

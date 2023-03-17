import PropTypes from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      {...rest}
      className={`
      mt-2 block w-full rounded-md border-transparent bg-white p-3 text-[#959cb1] shadow-lg
      focus-within:outline-2 focus-within:outline-[#4a6cf7]
     dark:bg-[#242B51]
     ${className ? className : ""}`}
    />
  );
});

Input.propType = {
  className: PropTypes.string,
};
export default Input;

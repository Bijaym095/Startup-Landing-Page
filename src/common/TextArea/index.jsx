import { forwardRef } from "react";

const TextArea = forwardRef(({ className, rest }, ref) => {
  return (
    <textarea
      {...rest}
      ref={ref}
      className={`
    mt-2 block min-h-[150px] w-full rounded-md border-transparent bg-white p-3 text-[#959cb1] shadow-lg
    focus-within:outline-2 focus-within:outline-[#4a6cf7]
    dark:bg-[#242B51]
    ${className ? className : ""}`}
    ></textarea>
  );
});

export default TextArea;

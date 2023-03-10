import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const buttonVariants = cva(
  "font-semibold transition-colors duration-300 text-base",

  {
    variants: {
      variant: {
        default: "bg-white text-black",
        primary: "bg-primary hover:bg-opacity-80 text-white",
        secondary: "bg-secondary bg-opacity-10 text-black hover:bg-opacity-20",
      },

      size: {
        default: "px-8 py-4",
        sm: "px-4 py-2",
      },

      rounded: {
        default: "rounded-none",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

const Button = forwardRef((props, ref) => {
  const { variant, rounded, size, className, children, ...rest } = props;

  return (
    <button
      className={buttonVariants({ variant, rounded, size, className })}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;

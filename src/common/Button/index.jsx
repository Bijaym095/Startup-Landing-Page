import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

import { Link, NavLink } from "react-router-dom";

const buttonVariants = cva(
  //base stylings
  "font-medium transition-colors duration-300 text-base",

  {
    // variants
    variants: {
      // type-variant
      variant: {
        default: "bg-white text-black",
        primary: "bg-primary hover:bg-opacity-80 text-white",
        secondary:
          "bg-secondary bg-opacity-10 text-black hover:bg-opacity-20 dark:text-white dark:bg-[rgb(255,255,255)] dark:bg-opacity-10 dark:hover:bg-opacity-20",
      },

      // size-variant
      size: {
        sm: "px-4 py-2",
        md: "px-8 py-4",
      },

      // rounded-variant
      rounded: {
        default: "rounded-none",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },

    // defaultVariants
    defaultVariants: {
      variant: "default",
      size: "md",
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

export const LinkButton = forwardRef((props, ref) => {
  const { to, variant, rounded, size, className, children, ...rest } = props;

  return (
    <Link
      to={to}
      type="button"
      role="button"
      className={buttonVariants({ variant, rounded, size, className })}
      {...rest}
      ref={ref}
    >
      {children}
    </Link>
  );
});

export const NavLinkButton = forwardRef((props, ref) => {
  const { to, variant, rounded, size, className, children, ...rest } = props;

  return (
    <NavLink
      to={to}
      type="button"
      role="button"
      className={buttonVariants({ variant, rounded, size, className })}
      {...rest}
      ref={ref}
    >
      {children}
    </NavLink>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;

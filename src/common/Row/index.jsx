import PropTypes from "prop-types";
import { forwardRef } from "react";

const Row = forwardRef((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={`-mx-4 flex flex-wrap ${className ? className : ""}`}
      ref={ref}
    >
      {children}
    </div>
  );
});

export const RowItem = forwardRef((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={`shrink-0 px-4 ${className ? className : ""}`}
      ref={ref}
    >
      {children}
    </div>
  );
});

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

RowItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Row;

import PropTypes from "prop-types";
import { forwardRef } from "react";

const Container = forwardRef((props, ref) => {
  const { className, children } = props;

  return (
    <div ref={ref} className={`container ${className ? className : ""}`}>
      {children}
    </div>
  );
});

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;

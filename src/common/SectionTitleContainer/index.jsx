import { forwardRef } from "react";
import PropTypes from "prop-types";

const SectionTitleContainer = forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div
      {...rest}
      ref={ref}
      className={`mx-auto max-w-[570px] text-center ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
});

SectionTitleContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionTitleContainer;

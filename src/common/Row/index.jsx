import PropTypes from "prop-types";

const Row = ({ className, children }) => {
  return (
    <div className={`flex flex-wrap -mx-5 ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export const RowItem = ({ className, children }) => {
  return (
    <div className={`shrink-0 px-5 ${className ? className : ""}`}>
      {children}
    </div>
  );
};

Row.proptypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

RowItem.proptypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Row;

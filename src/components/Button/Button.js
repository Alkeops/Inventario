import React from "react";
import { classGenerator as cg } from "utils";
import PropTypes from "prop-types";

export const Button = ({ children, className, label, onClick, variant, ...rest }) => {
  return (
    <button
      className={cg({ className, prefix: "c-btn", variant })}
      onClick={onClick}
      {...rest}
    >
      {children || label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  rest: PropTypes.object,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: undefined,
  label: undefined,
  onClick: undefined,
  variant: undefined,
  rest: undefined,
  children: undefined,
};

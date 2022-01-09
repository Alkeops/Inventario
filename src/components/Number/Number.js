import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
const prefix = "c-number";
const symbols = {
  subtract: "-",
  add: "+",
};

export const Number = ({ type, quantity }) => {
  return (
    <span className={cn(prefix, { [`${prefix}--${type}`]: type })}>
      {symbols[type]}
      {quantity}
    </span>
  );
};

Number.propTypes = {
  type: PropTypes.oneOf(["add", "subtract"]).isRequired,
  quantity: PropTypes.number.isRequired,
};

import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { Number } from "components";

const prefix = "c-last-movement";

export const LastMovement = ({ movement }) => {
  return (
    <div
      className={cn(prefix, { [`${prefix}--${movement.type}`]: movement.type })}
    >
      <div className={`${prefix}__data`}>
        <span className={`${prefix}__data-name`}>{movement.item}</span>
        <span className={`${prefix}__data-date`}>{movement.date}</span>
      </div>
      <Number type={movement.type} quantity={movement.quantity} />
    </div>
  );
};

LastMovement.propTypes = {
  movement: PropTypes.shape({
    type: PropTypes.oneOf(["add", "subtract"]).isRequired,
    quantity: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

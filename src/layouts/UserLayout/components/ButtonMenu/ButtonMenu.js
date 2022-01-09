import classNames from "classnames";
import PropTypes from "prop-types";
import { Button } from "components/index";

const prefix = "l-button-menu";
export const ButtonMenu = ({ onClick, active }) => {
  const className = classNames(prefix, { [`${prefix}--active`]: active });
  return (
    <Button test-id={"q-button-menu"} className={className} onClick={onClick}>
      <span className={`${prefix}__line`}></span>
      <span className={`${prefix}__line`}></span>
    </Button>
  );
};

ButtonMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuLink = ({ to, label, onClick }) => {
  return (
    <Link className={"l-menu-link"} to={to} onClick={() => onClick?.()}>
      {label}
    </Link>
  );
};

export default MenuLink;

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

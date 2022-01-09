import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";
const prefix = "l-menu-link";
const MenuLink = ({ to, label, onClick }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={cn(prefix, { [`${prefix}--active`]: match })}
      to={to}
      onClick={() => onClick?.()}
    >
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

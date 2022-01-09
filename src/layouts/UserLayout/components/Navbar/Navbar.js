
import {Menu} from "../Menu/Menu";
import React from "react";
import {Link } from "react-router-dom";

const prefix = "l-navbar";

const Navbar = () => {
  return (
    <div className={prefix}>
      <Link to="/" className={`${prefix}__brand`}>Smart stock</Link>
      <Menu />
    </div>
  );
};

export default Navbar;

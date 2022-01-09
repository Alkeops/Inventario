
import {Menu} from "../Menu/Menu";
import React from "react";

const prefix = "l-navbar";

const Navbar = () => {
  return (
    <div className={prefix}>
      <span className={`${prefix}__brand`}>Smart stock</span>
      <Menu />
    </div>
  );
};

export default Navbar;

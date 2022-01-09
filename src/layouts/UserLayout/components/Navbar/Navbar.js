import { Menu } from "../Menu/Menu";
import React from "react";
import { Link } from "react-router-dom";
import { useUiContext } from "contexts/UI/ui.context";
import { changeTheme } from "contexts/UI/ui.actions";

const prefix = "l-navbar";

const Navbar = () => {
  const { dispatch } = useUiContext();
  return (
    <div className={prefix}>
      <Link to="/" className={`${prefix}__brand`}>
        Smart stock
      </Link>
      <Menu />
      <div style={{ maxWidth: 200, position: "fixed", bottom: 0, left: 0 }}>
        <button onClick={() => dispatch(changeTheme("dark"))}>Oscuro</button>
        <button onClick={() => dispatch(changeTheme("light"))}>Claro</button>
      </div>
    </div>
  );
};

export default Navbar;

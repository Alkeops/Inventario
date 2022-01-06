import { Button } from "components";
import React from "react";

const prefix = "l-navbar";

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`l-menu ${isOpen ? "active" : ""}`}>
      <ButtonMenu
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
};
const ButtonMenu = ({onClick}) => (
  <Button className={"l-button-menu"} onClick={onClick}>
    <span></span>
    <span></span>
  </Button>
);
const Navbar = () => {
  return (
    <div className={prefix}>
      <span className={`${prefix}__brand`}>Smart stock</span>
      <Menu />
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import { ButtonMenu } from "../ButtonMenu/ButtonMenu";
import classNames from "classnames";
import MenuLink from "../MenuLink/MenuLink";

const prefix = "l-menu";
const routes = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "Inventory" },
  { to: "/movements", label: "Movements" },
  { to: "/warehouse", label: "Warehouse" },
  { to: "/settings", label: "Settings" },
];
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const className = classNames(prefix, { [`${prefix}--open`]: isOpen });
  return (
    <div className={className}>
      <ButtonMenu
        active={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <nav className={`${prefix}__mobile`}>
        <div className={`${prefix}__mobile-content`}>
          {routes.map((route) => (
            <MenuLink
              key={route.label}
              {...route}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

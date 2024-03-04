import React from "react";
import clsx from "clsx";
import style from "./MobileMenu.module.scss";

const MobileMenu = ({
  navList,
  isOpen,
}: {
  navList: string[];
  isOpen: boolean;
}) => {
  const menuStyle = clsx(style.menu, isOpen && style.open);

  return (
    <div className={menuStyle}>
      <ul>
        {navList.map((item) => (
          <li key={item}>
            <a href={`#${item}`} className={style.link}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;

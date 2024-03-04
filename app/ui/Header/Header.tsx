"use client";
import React, { useState } from "react";
import Container from "../Container";
import { GiHamburgerMenu } from "react-icons/gi";

import style from "./Header.module.scss";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const routes = ["about", "skills", "portfolio", "experience", "education"];

  const mobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={style.header}>
      <Container>
        <nav>
          <ul className={style.navList}>
            {routes.map((route) => (
              <li key={route}>
                <a href={`#${route}`} className={style.link}>
                  {route}
                </a>
              </li>
            ))}
          </ul>
          <MobileMenu navList={routes} isOpen={isMobileMenuOpen} />
        </nav>

        <button
          type="button"
          className={style.button}
          onClick={mobileMenuToggle}
        >
          <GiHamburgerMenu size={26} />
        </button>
      </Container>
    </header>
  );
};

export default Header;

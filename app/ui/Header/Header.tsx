import React from "react";
import Container from "../Container";

const Header = () => {
  const routes = ["about", "skills", "portfolio", "experience", "education"];

  return (
    <header>
      <Container>
        <ul>
          {routes.map((route) => (
            <li key={route}>
              <a href={`#${route}`}>{route}</a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
};

export default Header;

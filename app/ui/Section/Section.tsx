import React from "react";

import Container from "../Container";

import style from "./Section.module.scss";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={style.section}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;

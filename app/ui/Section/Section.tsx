import React from "react";

import Container from "../Container";

import style from "./Section.module.scss";

const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section className={style.section} id={id}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;

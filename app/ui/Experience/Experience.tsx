import React from "react";

import Section from "../Section";
import Heading from "../Heading/Heading";

import style from "./Experience.module.scss";

import goit from "./data/goit.json";
import paritet from "./data/paritet.json";
import Work from "./Work/Work";

const Experience = () => {
  const workExp = [
    { id: "goit", work: goit },
    { id: "paritet", work: paritet },
  ];

  return (
    <Section id="experience">
      <Heading tag="h2" text="WORK EXPERIENCE" className={style.title} />
      <ul className={style.list}>
        {workExp.map(({ id, work }) => (
          <Work key={id} work={work} />
        ))}
      </ul>
    </Section>
  );
};

export default Experience;

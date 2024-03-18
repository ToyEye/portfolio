import React from "react";
import Section from "../Section";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";

import style from "./Education.module.scss";
import educationData from "./data/educationData.json";

const Education = () => {
  return (
    <Section id="education">
      <Heading text="EDUCATION" tag="h2" className={style.title} />

      <ul className={style.list}>
        {educationData.map(({ name, position, period }) => (
          <li key={name} className={style.item}>
            <Heading text={name} />
            <Text text={position} />
            <Text text={period} className={style.text} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Education;

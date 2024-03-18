import React from "react";

import Section from "../Section";
import Heading from "../Heading/Heading";
import SkillList from "./SkillList/SkillList";

import style from "./Skills.module.scss";

import hardSkills from "./data/hardSkills.json";
import softSkills from "./data/softSkills.json";
import language from "./data/language.json";

const Skills = () => {
  return (
    <Section id="skills">
      <div className={style.skillsWrapper}>
        <div>
          <Heading text="Tech Skills" className={style.skillsTitle} />
          <SkillList skills={hardSkills} />
        </div>
        <div>
          <Heading text="Soft Skills" className={style.skillsTitle} />
          <SkillList skills={softSkills} />
        </div>
        <div>
          <Heading text="Language" className={style.skillsTitle} />
          <SkillList skills={language} lang />
        </div>
      </div>
    </Section>
  );
};

export default Skills;

// skillsTitle;

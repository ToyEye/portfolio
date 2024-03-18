import React from "react";
import clsx from "clsx";
import style from "./SkillList.module.scss";

const SkillList = ({ skills = [""], lang = false }) => {
  const styles = clsx(style.skillListStyled, lang && style.lang);

  return (
    <ul className={styles}>
      {skills.map((skill) => (
        <li key={skill}>
          <span> {skill}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;

import React from "react";
import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";

import style from "./Work.module.scss";

type TWork = {
  position: string;
  company: string;
  period: string;
  duties: string[];
  achievements: string[];
};

type TProps = {
  work: TWork;
};

const Work = ({ work }: TProps) => {
  return (
    <div>
      <Heading text={work.position} tag="h3" className={style.title} />
      <Heading text={work.company} tag="h3" className={style.title} />
      <Text text={work.period} className={style.text} />
      <Heading text="Duties:" tag="h4" className={style.subTitle} />
      <ul className={style.list}>
        {work.duties.map((dutie) => {
          return (
            <li key={dutie} className={style.item}>
              <span> {dutie}</span>
            </li>
          );
        })}
      </ul>

      {work.achievements.length > 0 && (
        <>
          <Heading text="Achievements:" className={style.subTitle} />
          <ul className={style.list}>
            {work.achievements.map((achievement) => {
              return (
                <li key={achievement} className={style.item}>
                  <span>{achievement}</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Work;

import React from "react";
import Section from "../Section";

import Text from "../Text/Text";

import portfolioData from "./data/portfolioData.json";
import style from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <ul className={style.list}>
        {portfolioData.map(
          ({ name, technologies, description, pathOnLive, image }) => (
            <li key={name} className={style.item}>
              <img src={image} alt={name} />

              <div>
                <a
                  href={pathOnLive}
                  target="_blank"
                  rel="noreferrer"
                  className={style.link}
                >
                  {name}
                </a>
                <Text text={description} className={style.text} />
                <Text text={`Technologies: ${technologies}`} />
              </div>
            </li>
          )
        )}
      </ul>
    </Section>
  );
};

export default Portfolio;

import React from "react";
import Image from "next/image";

import Section from "../Section";
import style from "./AboutMe.module.scss";

import avatar from "/public/avatar.jpg";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";

const AboutMe = () => {
  return (
    <Section id="about">
      <div className={style.avatarWrapper}>
        <Image src={avatar} alt="Oleksii Korotenko" fill />
      </div>
      <Text text="Hello! My name is Oleksii" className={style.greetings} />
      <Heading text="I`m a front-end web developer." className={style.whoI} />
      <Heading
        text="I can write clean code and
          pixel-perfect design."
        className={style.whoI}
      />

      <Text
        text="Dynamic FullStack Developer with a solid foundation in web development technologies such as HTML5, CSS3, SCSS, and GIT, coupled with expertise in JavaScript, React, Redux, NextJs, Tailwind, Node, Express, and TypeScript. Passionate about crafting efficient and user-friendly web applications, with a keen eye for detail and a commitment to delivering high-quality results. Proven ability to collaborate effectively within a team environment, utilizing strong communication and problem-solving skills. Known for being conscientious, calm, and punctual, with a relentless drive to learn and adapt to new technologies. Seeking a full-time position where I can leverage my skills and continue to grow professionally."
        className={style.about}
      />
      <a href="/public/cv.pdf" download className={style.downloadLink}>
        Download CV
      </a>
    </Section>
  );
};

export default AboutMe;

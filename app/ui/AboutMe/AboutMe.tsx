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
        text="I have good knowledge of HTML, CSS, JavaScript, React and NodeJS. In
          addition, I have hands-on experience with Agile/Scrum. course work
          methodology"
        className={style.about}
      />
      <a href="/public/cv.pdf" download className={style.downloadLink}>
        Download CV
      </a>
    </Section>
  );
};

export default AboutMe;

import AboutMe from "./ui/AboutMe/AboutMe";
import Education from "./ui/Education/Education";
import Experience from "./ui/Experience/Experience";
import Skills from "./ui/Skills/Skills";

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
}

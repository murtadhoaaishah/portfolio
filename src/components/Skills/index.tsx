import { useEffect } from "react";
import Skill from "../Skill";
import "aos/dist/aos.css";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      disable: false,
      duration: 700,
      offset: 120,
    });
  }, []);
  return (
    <div id="skills" className="h-screen">
      {[1, 2, 3].map((el, index) => (
        <Skill index={index} />
      ))}
    </div>
  );
};

export default Skills;

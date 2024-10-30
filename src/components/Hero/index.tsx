import { useEffect, useState } from "react";
import "./Hero.css";
import HeroComp1 from "../HeroComp2/HeroComp1";
import HeroComp2 from "../HeroComp2";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className={`hero-cont hero ${currentPage === 0 ? "hero1" : "bg-white"}`}
    >
      {currentPage == 0 ? <HeroComp1 /> : <HeroComp2 />}
      <div className="btns">
        <span
          className={`btn1 ${
            currentPage === 0 ? " bg-gray" : "border border-blue"
          }
          `}
        ></span>
        <span
          className={`btn2 ${
            currentPage === 0 ? "border  border-blue" : "bg-gray"
          }
          `}
        ></span>
      </div>
    </section>
  );
};

export default Hero;

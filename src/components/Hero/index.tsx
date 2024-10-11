import { useEffect, useState } from "react";
import "./Hero.scss";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main
      className={`hero-cont hero slide-in-text ${
        currentPage === 0 ? "bg-hero" : "bg-white"
      }`}
    >
      <section className="hero-hdn-wrp">
        <span className="hi name">Hi!</span>
        <span className="name name-span">I'm 'Aaishah</span>
        <p className="dvlper-desc">
          A seasoned Frontend developer with a proven track record
        </p>
      </section>
      {/* <section className="mb-32 ml-12 h-20 w-24"> */}
      <button className="cv">
        <img src="vectors/download.svg" alt="" />
        <span className="cv-span">DOWNLOAD CV</span>
      </button>
      {/* </section> */}
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
    </main>
  );
};

export default Hero;

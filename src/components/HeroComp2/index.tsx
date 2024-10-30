import React from "react";

const HeroComp2 = () => {
  return (
    <div data-aos="fade-up" className="relative">
      <section className="hero-hdn-wrp">
        <span className="name name-span">I'm a Software Engineer</span>
        <p className="dvlper-desc">
          An Engineer who brings expertise in both frontend and backend
          development.
        </p>
        <img
          src="/images/hero2.gif"
          alt=""
          className="w-[28rem] absolute right-0 bottom-0"
        />
      </section>

      <button className="cv">
        <span className="cv-span">DOWNLOAD CV</span>
        <img src="vectors/download.svg" alt="" />
      </button>
    </div>
  );
};

export default HeroComp2;

import React from "react";

const HeroComp2 = () => {
  return (
    <div>
      <section className="hero-hdn-wrp">
        <span className="name name-span">I'm a Software Engineer</span>
        <p className="dvlper-desc">
          An Engineer who brings expertise in both frontend and backend
          development.
        </p>
      </section>

      <button className="cv">
        <span className="cv-span">DOWNLOAD CV</span>
        <img src="vectors/download.svg" alt="" />
      </button>
    </div>
  );
};

export default HeroComp2;

import React from "react";

const HeroComp1 = () => {
  return (
    <div data-aos="fade-up">
      <section className="hero-hdn-wrp">
        <span className="hi name ">Hi!</span>
        <span className="name name-span">I'm 'Aaishah</span>
        <p className="dvlper-desc">
          A seasoned Frontend developer with a proven track record
        </p>
      </section>

      <button className="cv">
        <span className="cv-span">DOWNLOAD CV</span>
        <img src="vectors/download.svg" alt="" />
      </button>
    </div>
  );
};

export default HeroComp1;

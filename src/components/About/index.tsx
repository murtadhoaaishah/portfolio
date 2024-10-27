import React from "react";
import "./About.css";
import { professions } from "../../data";
import ProfessionCard from "../ProfessionCard";

const About = () => {
  return (
    <main id="about" data-aos="fade-up" className="about-container">
      <section className="mb-10">
        <p className="small-hdn">ABOUT US</p>
        <p className="name big-hdn">WHO AM I</p>
        <p className="mb-8 text">
          <span className="about-name">Hi I am Murtadho 'Aaishah</span>A
          passionate frontend developer, that brings creativity and precision to
          every project. With a strong foundation in web technologies, I
          specialize in crafting engaging and user-centric interfaces. My
          attention to detail, combined with a collaborative mindset, allows me
          to deliver seamless and visually appealing digital experiences. Eager
          to
        </p>
        <p className="text">
          contribute my skills to innovative projects and drive the future of
          webdevelopment.
        </p>
      </section>
      <section className="profession-card-wrp">
        {professions.map((profession, index) => (
          <ProfessionCard
            icon={profession.icon}
            title={profession.title}
            id={profession.id}
          />
        ))}
      </section>
    </main>
  );
};
export default About;

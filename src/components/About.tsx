import React from "react";
import { professions } from "../data";
import ProfessionCard from "./ProfessionCard";

const About = () => {
  return (
    <main className="h-screen pt-24 pl-10 pr-20">
      <section className="mb-10">
        <p className="text-[0.65rem] tracking-[0.5rem] mb-10">ABOUT US</p>
        <p className="text-lg font-semibold name tracking-[0.5rem] mb-24">
          WHO AM I
        </p>
        <p className="mb-8">
          <span className="text-sm font-semibold mr-2">
            Hi I am Murtadho 'Aaishah
          </span>
          A passionate frontend developer, that brings creativity and precision
          to every project. With a strong foundation in web technologies, I
          specialize in crafting engaging and user-centric interfaces. My
          attention to detail, combined with a collaborative mindset, allows me
          to deliver seamless and visually appealing digital experiences. Eager
          to
        </p>
        <p>
          contribute my skills to innovative projects and drive the future of
          webdevelopment.
        </p>
      </section>
      <section className="flex flex-wrap space-x-8">
        {professions.map((profession, index) => (
          <ProfessionCard icon={profession.icon} title={profession.title} />
        ))}
      </section>
    </main>
  );
};

export default About;

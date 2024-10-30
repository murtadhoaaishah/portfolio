import React from "react";
import "./Services.css";
import { expeertises } from "../../data";
import ExpertiseCard from "../ExpertiseCard";
import ProjectsInfo from "../ProjectsInfo";

const Services = () => {
  return (
    <section id="services" className="">
      <main className="bg-white pl-10 pr-20">
        {/* <header className="ml-10 mr-20 mb-20"> */}
        <p className="small-hdn">WHAT I DO?</p>
        <p className="big-hdn">HERE ARE SOME OF MY EXPERTISE</p>
        {/* </header> */}
        <div className="expertise-card-cont">
          {expeertises.map((expertise, index) => (
            <ExpertiseCard
              icon={expertise.icon}
              title={expertise.title}
              desc={expertise.desc}
            />
          ))}
        </div>
      </main>
      <ProjectsInfo />
    </section>
  );
};

export default Services;

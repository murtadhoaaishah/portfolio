import React from "react";
import "./Services.css";
import { expeertises } from "../../data";
import ExpertiseCard from "../ExpertiseCard";

const Services = () => {
  return (
    <main id="services" data-aos="fade-up" className="h-screen ml-10 mr-20">
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
  );
};

export default Services;

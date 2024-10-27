import React from "react";
import "./ExpertiseCard.css";

const ExpertiseCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <section className="expertise-cont">
      <div className="hexagon"></div>
      <p className="expertise-titl">{title}</p>
      <p>{desc}</p>
    </section>
  );
};

export default ExpertiseCard;

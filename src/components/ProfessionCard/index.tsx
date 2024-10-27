import React from "react";
// import { professions } from "../../data";
import "./ProfessionCard.css";

const ProfessionCard = ({
  icon,
  title,
  id,
}: {
  icon: string;
  title: string;
  id: number;
}) => {
  return (
    <div className="pro-card-cont">
      {" "}
      <img src={icon} className="" />
      <p className="pro-card-desc">{title}</p>
      <p className={`${id == 1 ? "bg-blue" : "bg-gold"} h-1 w-48`}></p>
    </div>
  );
};

export default ProfessionCard;

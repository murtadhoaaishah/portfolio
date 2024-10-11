import React from "react";
import { professions } from "../../data";

const ProfessionCard = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="pro-card-cont">
      {" "}
      <img src={icon} className="" />
      <p className="">{title}</p>
    </div>
  );
};

export default ProfessionCard;

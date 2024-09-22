import React from "react";
import { professions } from "../data";

const ProfessionCard = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="w-48 h-36 flex flex-col p-6 shadow-xl">
      {" "}
      <img src={icon} className="w-8 mb-6 border-gray" />
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default ProfessionCard;

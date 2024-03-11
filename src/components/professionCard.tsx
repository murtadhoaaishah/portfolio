import React from "react";

const professionCard = () => {
  const professions = [
    {
      id: 1,
      icon: "",
      profession: "frontend development",
    },
  ];

  return (
    <div className="">
      {professions.map((profession) => {
        <div>
          {" "}
          <img src={profession.icon} />
          <p>{profession.profession}</p>
        </div>;
      })}
    </div>
  );
};

export default professionCard;

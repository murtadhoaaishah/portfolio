import React from "react";

const Skill = ({ index }: { index: number }) => {
  return (
    <div data-aos={`${index % 2 ? "fade-right" : "fade-left"}`}>
      This is a Skill
    </div>
  );
};

export default Skill;

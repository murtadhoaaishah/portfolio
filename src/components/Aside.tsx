import { useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Services from "./Services";
import Skills from "./Skills";
import Work from "./Work";
import About from "./About";

const Aside = () => {
  const pages = [
    {
      id: 1,
      name: "HOME",
      url: "#home",
    },
    {
      id: 2,
      name: "ABOUT",
      url: "#about",
    },
    {
      id: 3,
      name: "SERVICES",
      url: "#services",
    },
    {
      id: 5,
      name: "SKILLS",
      url: "#skills",
    },
    {
      id: 6,
      name: "EDUCATION",
      url: "#education",
    },
    {
      id: 7,
      name: "EXPERIENCE",
      url: "#experience",
    },
    {
      id: 8,
      name: "WORK",
      url: "#work",
    },
    {
      id: 9,
      name: "CONTACT",
      url: "#contact",
    },
  ];

  const [selected, setSelected] = useState<number>(0);

  const handleClick:
    | React.MouseEventHandler<HTMLSpanElement>
    | undefined
    | any = (index: number) => {
    setSelected(index);
  };
  return (
    <div className="flex flex-col h-screen w-[18rem] text-center bg-[#f2f3f7] fixed">
      <div className="flex mb-12 justify-center">
        <img
          src="/images/IMG_1502.jpg"
          alt="img"
          className="h-[9rem] w-[9rem] rounded-[50%]"
        />
      </div>
      <span className="name mb-8 text-2xl font-extrabold">Murtadho Aishat</span>
      <span className="mb-12 text-xs">
        <span className="text-[#2d98f0]">FRONTEND DEVELOPER</span> IN NIGERIA
      </span>
      <div className="text-center flex flex-col space-y-4 ">
        {pages.map((page, index) => (
          <div>
            <a
              className=" hover:border hover:border-b-2 border-b-[#2d98f0] text-xs tracking-widest"
              onClick={() => handleClick(index)}
              href={page.url}
              key={page.id}
            >
              {page.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;

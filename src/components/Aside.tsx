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
  // const [home, isHome] = useState(false)

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
    <div className="flex flex-col h-screen w-[25rem] p-12 text-center bg-[#f2f3f7] ml-[8rem] fixed">
      <div className="mb-12">
        <img
          src="/images/IMG_1502.jpg"
          alt="img"
          className="h-[12rem] w-[15rem] rounded-[50%]"
        />
      </div>
      <span className="name mb-8 text-2xl font-extrabold">Murtadho Aishat</span>
      <span className="mb-12 text-xs">
        <span className="text-[#2d98f0]">FRONTEND DEVELOPER</span> IN NIGERIA
      </span>
      <div className="text-center flex flex-col space-y-4 ">
        {pages.map((page, index) => (
          <a
            className="custom-border text-xs tracking-widest"
            onClick={() => handleClick(index)}
            href={page.url}
            key={page.id}
          >
            {page.name}
          </a>
        ))}
        {/* {selected === 0 && <Hero />}
        {selected === 1 && <About />}
        {selected === 2 && <Services />}
        {selected === 3 && <Skills />}
        {selected === 4 && <Education />}
        {selected === 5 && <Experience />}
        {selected === 6 && <Work />}
        {selected === 7 && <Contact />} */}
      </div>
    </div>
  );
};

export default Aside;

// import React from "react";
// import Contact from "./Contact";
// import Education from "./Education";
// import Experience from "./Experience";
// import Hero from "./Hero";
// import Services from "./Services";
// import Skills from "./Skills";
// import Work from "./Work";
// import About from "./About";

// interface AsideProps {
//   scrollToSection: (id: string) => void;
// }

// const Aside: React.FC<AsideProps> = ({ scrollToSection }) => {
//   const sections = [
//     { id: "hero", name: "HOME" },
//     { id: "about", name: "ABOUT" },
//     { id: "services", name: "SERVICES" },
//     // Add similar sections for other components
//   ];

//   return (
//     <div className="flex flex-col h-screen w-[25rem] p-12 text-center bg-[#f2f3f7] ml-[8rem]">
//       {/* ... (your existing code) */}
//       <div className="text-center flex flex-col space-y-4 ">
//         {sections.map((section) => (
//           <span
//             className="custom-border text-xs tracking-widest"
//             onClick={() => scrollToSection(section.id)}
//             key={section.id}
//           >
//             {section.name}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Aside;

import "./App.css";
import About from "./components/About";
import Aside from "./components/Aside/index.";
import Contact from "./components/Contacts";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import ProjectCount from "./components/ProjectCount";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="grid grid-cols-[auto_1fr]   w-screen">
      <section className="ml-14 sticky top-0 bottom-0 left-0 h-screen">
        <Aside />
      </section>
      <section className=" h-full  w-full">
        <Hero />
        <About />
        <ProjectCount />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Contact />
      </section>
    </div>
  );
};

export default App;

// import React, { useRef } from "react";
// import "./App.css";
// import Aside from "./components/Aside";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Skills from "./components/Skills";
// import Education from "./components/Education";
// import Experience from "./components/Experience";
// import Work from "./components/Work";
// import Contact from "./components/Contact";

// function App() {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const aboutRef = useRef<HTMLDivElement>(null);
//   const servicesRef = useRef<HTMLDivElement>(null);
//   // Add similar refs for other sections

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="flex flex-row">
//       <Aside scrollToSection={scrollToSection} />
//       <section className="w-full">
//         <div ref={heroRef} id="hero">
//           <Hero />
//         </div>
//         <div ref={aboutRef} id="about">
//           <About />
//         </div>
//         <div ref={servicesRef} id="services">
//           <Services />
//         </div>
//         {/* Add similar sections for other components */}
//       </section>
//     </div>
//   );
// }

// export default App;

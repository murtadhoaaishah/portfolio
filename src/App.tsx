import "./App.css";
import About from "./components/About";
import Aside from "./components/Aside";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="grid grid-flow-cols grid-cols-3">
      <section>
        <Aside />
      </section>
      <section className="pflex-1 flex flex-col col-span-2">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </section>
    </div>
  );
}

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

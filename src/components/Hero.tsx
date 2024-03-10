import { useEffect, useState } from "react";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage === 0 ? 1 : 0));
    }, 5000); // Switch pages every 5 seconds (adjust the interval as needed)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // useEffect(() => {
  //   const textElement = document.querySelector(".slide-in-text");

  //   // Check if the element exists before adding the class
  //   if (textElement) {
  //     textElement.classList.add("slide-in-text");
  //   }

  //   // Remove the class after the animation duration (1s in this case)
  //   const timeoutId = setTimeout(() => {
  //     if (textElement) {
  //       textElement.classList.remove("slide-in-text");
  //     }
  //   }, 1000); // Adjust this timeout based on your animation duration

  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <section
      className={`hero  bg-cover bg-center h-screen pl-16 flex flex-col pt-[6rem]  ${
        currentPage === 0 ? "bg-hero" : "bg-white"
      }`}
    >
      <div className="flex flex-col mb-16 slide-in-text">
        <span className="name text-[3.75rem] font-extrabold ">Hi!</span>
        <span className="name text-[3.75rem] font-extrabold">I'm 'Aaishah</span>
        <p className="text-xl tracking-widest max-w-[40%]">
          A seasoned Frontend developer with a proven track record
        </p>
      </div>
      <div className="mb-[12rem]">
        <button className="tracking-widest border border-black w-[13rem] h-[2rem] text-xs">
          <span className="">DOWNLOAD CV</span>
          {/* <img src="" alt="" /> */}
        </button>
      </div>
      <div className="flex flex-col">
        <span
          className={`h-[0.75rem] w-[0.75rem] rounded-xl mb-[0.5rem]
          ${currentPage === 0 ? " bg-gray-400" : "border border-sky-500"}
          `}
        ></span>
        <span
          className={`h-[0.75rem] w-[0.75rem] rounded-xl mb-[0.5rem] border-sky-500
          ${currentPage === 0 ? "border  border-sky-500" : "bg-gray-400"}
          `}
        ></span>
      </div>
    </section>
  );
};

export default Hero;

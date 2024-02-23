import React from "react";

const Aside = () => {
  const pages = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "SKILLS",
    "EDUCATION",
    "EXPERIENCE",
    "WORK",
    "CONTACT",
  ];
  return (
    <div className="flex flex-col h-screen w-[25rem] p-12 text-center bg-[#f2f3f7] ml-[8rem]">
      <div className="mb-12">
        <img
          src="/images/IMG_1502.jpg"
          alt="my-image"
          className="h-[12rem] w-[15rem] rounded-[50%]"
        />
      </div>
      <span className="name mb-8 text-2xl font-extrabold">Murtadho Aishat</span>
      <span className="mb-12 text-xs">
        <span className="text-[#2d98f0]">FRONTEND DEVELOPER</span> IN NIGERIA
      </span>
      <div className="text-center flex flex-col space-y-4 ">
        {pages.map((page) => (
          <span className="custom-border text-xs tracking-widest">{page}</span>
        ))}
        <span className=""></span>
      </div>
    </div>
  );
};

export default Aside;

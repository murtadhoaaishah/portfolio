import { useEffect } from "react";
import "./Aside.css";
import { pages } from "../../data";
// import aside
import AOS from "aos";
import "aos/dist/aos.css";

const Aside = () => {
  useEffect(() => {
    AOS.init({ duration: 700, offset: 120 });
  }, []);

  const handleScroll = (e: any, target: any) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="container">
      <div className="img-container">
        <img src={"/images/aside.jpg"} alt="img" className="side-img" />
      </div>
      <span className="side-name">Murtadho Aishat</span>
      <span className="side-country">
        <span className="side-fd">FRONTEND DEVELOPER</span> IN NIGERIA
      </span>
      <div className="nav-item-cont">
        {pages.map((page, index) => (
          <div>
            <a href={page.url} onClick={(e) => handleScroll(e, page.url)}>
              {page.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;

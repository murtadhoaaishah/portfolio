import { useState } from "react";
import "./Aside.scss";
import { pages } from "../../data";

const Aside = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleClick:
    | React.MouseEventHandler<HTMLSpanElement>
    | undefined
    | any = (index: number) => {
    setSelected(index);
  };
  return (
    <div className="container">
      <div className="img-container">
        <img src="/images/IMG_1502.jpg" alt="img" className="side-img" />
      </div>
      <span className="name side-name">Murtadho Aishat</span>
      <span className="side-country">
        <span className="side-fd">FRONTEND DEVELOPER</span> IN NIGERIA
      </span>
      <div className="nav-item-cont">
        {pages.map((page, index) => (
          <div>
            <a onClick={() => handleClick(index)} href={page.url} key={page.id}>
              {page.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;

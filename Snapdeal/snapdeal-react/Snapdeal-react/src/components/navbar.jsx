import { useState } from "react";
import { navData } from "../data/navData";

const Navbar = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className="nav">
      <div className="nav-bar">
        {navData.map((item, i) => (
          <div
            className={`nav-item ${activeIndex === i ? "active" : ""}`}
            key={i}
            onClick={() => handleClick(i)}
          >
            <img src={item.image} alt="" />
            <span>{item.title}</span>

            <div className="mega-menu">
              {item.categories.map((cat, j) => (
                <div className="mega-col" key={j}>
                  <h4>{cat.title}</h4>
                  {cat.items.map((sub, k) => (
                    <a key={k}>{sub}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
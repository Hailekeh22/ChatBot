import { useState } from "react";
import img from "../../assets/ai.png";
import "./Header.css";
import About from "../about/About";

function Header() {
  const [about, setAbout] = useState(false);

  const toogleAbout = () => {
    setAbout(!about);
  };

  return (
    <div className="navcontainer">
      <div className="appName">
        <img className="aipic" src={img} />{" "}
        <p className="botname">Hk ChatApp</p>
      </div>
      <div className="about">
        <a onClick={toogleAbout}>About</a>
      </div>
      {about && (
        <div className="aboutContainer">
          <About />
        </div>
      )}
    </div>
  );
}

export default Header;

import React from "react";
import img from "../../assets/ai.png";
import "./Header.css";

function Header() {
  return (
    <div className="navcontainer">
      <img className="aipic" src={img} /> <p className="botname">Hk ChatApp</p>
    </div>
  );
}

export default Header;

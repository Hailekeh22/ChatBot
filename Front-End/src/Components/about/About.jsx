import React from "react";
import "./about.css";

const About = () => {
  return (
    <div class="card">
      <h2>Built By</h2>
      <p>Haileleul Kehali</p>
      <div class="social-links">
        <a href="https://github.com/Hailekeh22" target="_blank">
          <img
            src="https://img.icons8.com/ios-glyphs/30/github.png"
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/haileleul-kehali-26680020a/"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/linkedin.png"
            alt="LinkedIn"
          />
        </a>
        <a href="https://www.instagram.com/hailee_k22/" target="_blank">
          <img
            src="https://img.icons8.com/ios-glyphs/40/instagram.png"
            alt="Twitter"
          />
        </a>
      </div>
    </div>
  );
};

export default About;

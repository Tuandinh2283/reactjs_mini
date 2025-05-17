import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container" id="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="github" />
          <img src={Instagram} alt="instagram" />
          <img src={LinkedIn} alt="linkedin" />
        </div>
        <div className="logo-section">
          <img src={Logo} alt="logo" className="logo-img" />
          <div className="brand-text"></div>
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;

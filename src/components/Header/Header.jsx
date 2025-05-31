import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { FaHome, FaMusic, FaGithub, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const mobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // trạng thái ẩn/hiện submenu

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="Menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          {/* Các mục chính */}
          <li onClick={() => setMenuOpened(false)}>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="program" smooth={true} duration={500}>
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="reasons" smooth={true} duration={500}>
              Why us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="plan" smooth={true} duration={500}>
              Plan
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="testimonials" smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
          <li
            className="submenuOpen"
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            More Options
            {submenuOpen && (
              <ul className="submenu">
                <li onClick={() => setMenuOpened(false)}>
                  <a
                    href="https://github.com/Tuandinh2283/reactjs_mini"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                </li>
                <li onClick={() => setMenuOpened(false)}>
                  <RouterLink to="/music" title="Music">
                    <FaMusic /> Music
                  </RouterLink>
                </li>
                <li onClick={() => setMenuOpened(false)}>
                  <RouterLink to="/login" title="Login">
                    <FaSignInAlt /> Login
                  </RouterLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

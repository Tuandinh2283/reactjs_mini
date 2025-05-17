import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      {/* Logo */}
      <img src={Logo} alt="Logo" className="logo" />

      {/* Nếu là mobile và menu chưa mở thì hiển thị icon Bars */}
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
          {/* Menu đóng khi click vào item */}
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>{" "}
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="program"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="reasons"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              {" "}
              Why us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="plan"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              {" "}
              Plan
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              {" "}
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

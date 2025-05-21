import React from "react";
import "./Sidebar.css";
import { FaHome, FaMusic, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" title="Home">
        <FaHome />
      </Link>
      <Link to="/music" title="Music">
        <FaMusic />
      </Link>
      <a
        href="https://github.com/Tuandinh2283/reactjs_mini"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Sidebar;

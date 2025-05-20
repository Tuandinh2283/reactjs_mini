// src/components/Sidebar/Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import { FaHome, FaMusic, FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#home" title="Home">
        <FaHome />
      </a>
      <a href="#music" title="Music">
        <FaMusic />
      </a>
      <a
        href="https://github.com/"
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

import React from "react";
import "./Sidebar.css";
import { FaHome, FaMusic, FaGithub, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" title="Home">
        <FaHome />
      </Link>
      <Link to="/login" title="Login">
        <FaSignInAlt />
      </Link>
    </div>
  );
};

export default Sidebar;

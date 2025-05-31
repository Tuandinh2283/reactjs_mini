import React from "react";
import {
  BiBookAlt,
  BiHome,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
  BiLogOut,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../components/styles/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Xóa token nếu cần
    navigate("/login");
  };

  return (
    <div className="menu">
      <div className="logo">
        <h2>tuan</h2>
        <BiBookAlt className="logo-icon" />
      </div>
      <div className="menu--list">
        <a href="#" className="item active">
          <BiHome className="icon" />
          Dashboard
        </a>
        <a href="#" className="item">
          <BiTask className="icon" />
          Assignment
        </a>
        <a href="#" className="item">
          <BiSolidReport className="icon" />
          Report
        </a>
        <a href="#" className="item">
          <BiStats className="icon" />
          Stats
        </a>
        <a href="#" className="item">
          <BiMessage className="icon" />
          Message
        </a>
        <a href="#" className="item">
          <BiHelpCircle className="icon" />
          Help
        </a>
        <button className="item logout-btn" onClick={handleLogout}>
          <BiLogOut className="icon" />
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

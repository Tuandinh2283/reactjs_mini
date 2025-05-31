import React from "react";
import ProfileHeader from "./ProfileHeader";
import "./styles/ProfileHeader.css";
import userImage from "../../../assets/images_tuan/images_football.jpg";
import { duration } from "@mui/material";
import { BiBook } from "react-icons/bi";

const courses = [
  {
    title: "HTML",
    duration: "2 houres",
    icon: <BiBook />,
  },
  {
    title: "JavaScript",
    duration: "2 houres",
    icon: <BiBook />,
  },
  {
    title: "React.js",
    duration: "2 houres",
    icon: <BiBook />,
  },
  {
    title: "Java Spring boot",
    duration: "2 houres",
    icon: <BiBook />,
  },
];
const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />

      <div className="user--profile">
        <div className="user--detall">
          <img src={userImage} alt="" />
          <h3 className="username">Dinh Tuan</h3>
          <span className="profession">Developer</span>
        </div>
        <div className="user-courses">
          {courses.map((course, index) => (
            <div key={index} className="course">
              <div className="course-detail">
                <div className="course-cover">{course.icon}</div>
                <div className="course-name">
                  <h5 className="title">{course.title}</h5>
                  <span className="duration">{course.duration}</span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

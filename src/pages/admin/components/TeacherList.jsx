import React from "react";
import "./styles/teacherlist.css";
import Image1 from "../../../assets/hero_image.png";

const teachers = [
  {
    image: Image1,
    name: "Prof. Jhone Doe",
    duration: " 20 hours lesson",
    const: "100",
  },
  {
    image: Image1,
    name: "Prof. Jhone Doe",
    duration: " 20 hours lesson",
    const: "100",
  },
  {
    image: Image1,
    name: "Prof. Jhone Doe",
    duration: " 20 hours lesson",
    const: "100",
  },
  {
    image: Image1,
    name: "Prof. Jhone Doe",
    duration: " 20 hours lesson",
    const: "100",
  },
  {
    image: Image1,
    name: "Prof. Jhone Doe",
    duration: " 20 hours lesson",
    const: "100",
  },
];
const TeacherList = () => {
  return (
    <div className="teacher--list">
      <div className="list-header">
        <h2>Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="Viet">Tiếng việt</option>
        </select>
      </div>
      <div className="list--container">
        {teachers.map((teacher) => (
          <div className="list">
            <div className="teacher--detall">
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>{teacher.const}</span>
            <span className="teacher--todo">:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;

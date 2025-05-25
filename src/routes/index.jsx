// src/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Music from "../Music/Music";
import Login from "../pages/Login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/music" element={<Music />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

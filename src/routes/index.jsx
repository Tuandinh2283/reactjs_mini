import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Music from "../Music/Music";
import Login from "../pages/Login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/music" element={<Music />} />
      <Route path="/" element={<HomePage />} />

      {/* Điều hướng mặc định về login nếu path không khớp */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

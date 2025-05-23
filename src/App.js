import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Testimonials from "./assets/Testimonials/Testimonials";
import Hero from "./components/Hero/hero";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
import ChatBox from "./components/Chat-box/ChatBox";
import { MouseTrail } from "./components/MouseTrail/MouseTrail";
import Companies from "./components/Companies/Companies";
import Residentcies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Sidebar from "./components/Sidebar/Sidebar";

// ✅ Trang Music
import Music from "./Music/Music";

function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <Companies />
      <Residentcies />
      <Value />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.className = darkMode ? "dark-theme" : "";
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        <MouseTrail />
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 1000,
            backgroundColor: "var(--orange)",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/music" element={<Music />} />
        </Routes>
        <ChatBox />
      </div>
    </Router>
  );
}

export default App;

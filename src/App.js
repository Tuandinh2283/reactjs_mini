import { useEffect, useState } from "react";
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
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.className = darkMode ? "dark-theme" : "";
  }, [darkMode]);

  return (
    <div className="App">
      {/* Nút đổi theme */}
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
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
      <ChatBox />
    </div>
  );
}

export default App;

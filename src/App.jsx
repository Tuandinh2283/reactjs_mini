import { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./App.css";

// Component layout phụ
import Sidebar from "./components/Sidebar/Sidebar";
import ChatBox from "./components/Chat-box/ChatBox";
import LanguageDropdown from "./components/LanguageDropdown/LanguageDropdown";
import { MouseTrail } from "./components/MouseTrail/MouseTrail";

// Routes riêng
import AppRoutes from "./routes";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.className = darkMode ? "dark-theme" : "";
  }, [darkMode]);

  return (
    <div className="App relative">
      {!isLoginPage && <MouseTrail />}

      {!isLoginPage && (
        <div
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <LanguageDropdown />
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            style={{
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
        </div>
      )}

      {!isLoginPage && <Sidebar />}

      <AppRoutes />

      {!isLoginPage && <ChatBox />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

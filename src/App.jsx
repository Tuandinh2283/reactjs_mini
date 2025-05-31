import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";

// Component layout phụ
import Sidebar from "./components/Sidebar/Sidebar";
import ChatBox from "./components/Chat-box/ChatBox";
import { MouseTrail } from "./components/MouseTrail/MouseTrail";

// Routes riêng
import AppRoutes from "./routes";

function AppContent() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  // Các trang không hiển thị layout phụ
  const minimalPages = ["/login", "/dashboard"];
  const isMinimalPage = minimalPages.includes(location.pathname);

  useEffect(() => {
    if (!isMinimalPage) {
      document.documentElement.className = darkMode ? "dark-theme" : "";
    } else {
      document.documentElement.className = "";
    }
  }, [darkMode, location.pathname]);

  return (
    <div className="App relative">
      {!isMinimalPage && <MouseTrail />}

      {!isMinimalPage && (
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

      {!isMinimalPage && <Sidebar />}

      <AppRoutes />

      {!isMinimalPage && <ChatBox />}
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

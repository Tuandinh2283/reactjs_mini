import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "./Login.css";

function Login() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isRegistering
        ? "http://localhost:8080/api/auth"
        : "http://localhost:8080/login";
      const payload = isRegistering ? registerData : loginData;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setError(null);
        alert(isRegistering ? "Đăng ký thành công!" : "Đăng nhập thành công!");
        if (!isRegistering) {
          navigate("/");
        }
      } else {
        setError(
          data?.message ||
            (isRegistering ? "Đăng ký thất bại" : "Đăng nhập thất bại")
        );
      }
    } catch (err) {
      setError("Lỗi mạng hoặc máy chủ!");
    }
  };

  const toggleMode = () => {
    setError(null);
    setIsRegistering(!isRegistering);
    setLoginData({ username: "", password: "" });
    setRegisterData({ username: "", email: "", password: "" });
  };

  return (
    <div className="login-wrapper">
      <div className={`containers ${isRegistering ? "active" : ""}`}>
        {/* Login Form */}
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {error && !isRegistering && (
              <div className="error-text">{error}</div>
            )}
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p className="social-text">or login with social platforms</p>
            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {error && isRegistering && (
              <div className="error-text">{error}</div>
            )}
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={registerData.username}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    username: e.target.value,
                  })
                }
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  })
                }
                required
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <p className="social-text">or register with social platforms</p>
            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        {/* Toggle Box */}
        <div className="toggle-box">
          <div className="toggle-panel">
            <h2>{isRegistering ? "Welcome Back!" : "Hello, Friend!"}</h2>
            <p>
              {isRegistering
                ? "To keep connected with us please login with your personal info"
                : "Enter your details and start your journey with us"}
            </p>
            <button className="btn" type="button" onClick={toggleMode}>
              {isRegistering ? "Login" : "Register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

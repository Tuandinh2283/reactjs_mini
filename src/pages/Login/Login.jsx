import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "boxicons/css/boxicons.min.css";
import "./Login.css";
import "../admin/Dashboard";

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
      const BASE_URL =
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_LOCAL_API_URL
          : process.env.REACT_APP_PROD_API_URL;

      const url = isRegistering
        ? `${BASE_URL}/api/auth/register`
        : `${BASE_URL}/api/auth/login`;
      const payload = isRegistering ? registerData : loginData;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        if (data?.token) {
          localStorage.setItem("token", data.token);
          const tokenPayload = JSON.parse(atob(data.token.split(".")[1]));
          const role = tokenPayload.role || tokenPayload.roles?.[0] || "USER";

          toast(
            isRegistering ? "Đăng ký thành công!" : "Đăng nhập thành công!"
          );
          if (role === "ADMIN") {
            console.log("Role:", role); // kiểm tra vai trò trả về

            navigate("/dashboard");
          } else {
            navigate("/");
          }
        }
      } else {
        const errorMsg =
          data?.message || (typeof data === "string" ? data : null);
        setError(
          errorMsg ||
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
            <button type="submit" className="btn">
              Login
            </button>
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
                  setRegisterData({ ...registerData, username: e.target.value })
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
                  setRegisterData({ ...registerData, email: e.target.value })
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
                  setRegisterData({ ...registerData, password: e.target.value })
                }
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
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

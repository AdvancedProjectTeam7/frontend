import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import logo from "./images/logo-finance2.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputsFilled, setInputsFilled] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setInputsFilled((prev) => ({
      ...prev,
      email: Boolean(event.target.value.trim()),
    }));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setInputsFilled((prev) => ({
      ...prev,
      password: Boolean(event.target.value.trim()),
    }));
  };

  const handleLogin = () => {
    axios.post("http://localhost:8000/api/auth/login", { email, password })
      .then((response) => {
        const data = response.data;
        if (data.token) {
          console.log(email);
          localStorage.setItem("loggedInAdminId", data.id);
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.email);
          navigate("/dashboard"); // redirect to dashboard
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((error) => {
        console.error("Error checking credentials:", error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="left-side">
          <img className="logo1" src={logo} alt="logo" />
          <h2 className="logo-title">Finance Management</h2>
        </div>
        <div className="right-side">
          <form className="login-form">
            <h1 className="login-title">Login</h1>

            <div className={`email-wrapper ${email ? "has-value" : ""}`}>
              <input
                type="email"
                className="input-email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label
                className={`email ${inputsFilled.email ? "input-filled" : ""}`}
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className={`pass-wrapper ${password ? "has-value" : ""}`}>
              <input
                type="password"
                className="input-pass"
                id="pass"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <label
                className={`pass ${
                  inputsFilled.password ? "input-filled" : ""
                }`}
                htmlFor="pass"
              >
                Password
              </label>
            </div>

            <button className="btn-login" onClick={handleLogin}>
              {" "}
              Button
              <span></span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

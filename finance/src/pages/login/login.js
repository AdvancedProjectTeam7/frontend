import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import logo from "./images/logo-finance2.png";
import { useNavigate } from "react-router-dom";

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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8001/api/auth/login",
        { email, password }
      );
      const data = response.data;
      //   console.log("Server response:", data);
      if (data && data.access_token) {
        localStorage.setItem("loggedInAdminId", data.id || "");
        localStorage.setItem("token", data.access_token || "");
        localStorage.setItem("email", data.email || "");

        // use `await` to wait for the toast to complete
        await toast.success("Success Login !", {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000); // wait for 2 seconds before navigating
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error(`${error.response.statusText}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <ToastContainer className="my-toast-container" />
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
              Login
              <span></span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
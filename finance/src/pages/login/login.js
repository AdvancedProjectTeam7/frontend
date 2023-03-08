import React, { Component, Fragment } from "react";
import "./login.css";
import { useState } from "react";
import logo from "./images/logo-finance2.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("loggedInAdminId", data.id);
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.email);
          console.log(email);
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
    <div className="background-login"></div>
    <div className="container">
      <div className="left-side">
        <img className="logo1" src={logo} width={500} height={320} />
        <h2 className="logo-title">Finance Management</h2>
      </div>
      <div className="right-side">
        <form className="login-form">
          <h1 className="login-title">Login</h1>

          <div className="email-wrapper">
            <input
              type="email"
              className="input-email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label className="email" htmlFor="email">
              Email
            </label>
          </div>
          <div className="pass-wrapper">
            <input
              type="password"
              className="input-pass"
              id="pass"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label className="pass" htmlFor="pass">
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

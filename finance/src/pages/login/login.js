import React, { Component } from "react";
import "./login.css";

class Login extends Component {
    state = {
        email: "",
        password: "",
    };
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleLogin = () => {
        const { email, password } = this.state;
        fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    localStorage.setItem("loggedInAdminId", data.id);
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("email", data.email);
                } else {
                    alert("Invalid credentials");
                }
            })
            .catch((error) => {
                console.error("Error checking credentials:", error);
            });
    };
    render() {
        const { email, password } = this.state;

        return (
            <div className="login-div">
                <h1 className="login">Sign In</h1>
                <div className="login-form">
                    <div className="textInputWrapper">
                        <input
                            className="textInput"
                            placeholder="Insert your email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={this.handleEmailChange}
                            required
                        />
                    </div>
                    <div className="textInputWrapper1">
                        <input
                            className="textInput1"
                            placeholder="Insert your password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={this.handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="btn">
                        <button className="btn-1" onClick={this.handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

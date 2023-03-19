import React, { useState } from "react";
import "./dashboard.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBars, AiOutlineTransaction } from "react-icons/ai";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { Link } from "react-router-dom";
import image from "../images/logo.png";

const DashBoard = () => {
    const [isActive, setIsActive] = useState("dashboard");

    return (
        <>
            <input type="checkbox" name="" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <span className="lab la-accusoft">
                        <img src={image} alt="" width={"60px"} height={"40x"} />
                    </span>
                    <h2>Finance Management</h2>
                </div>
                <div className="sidebar-menu">
                    <div className="sidebar-menu-first">
                        <ul>
                            <Link
                                to="/dashboard"
                                style={{
                                    backgroundColor:
                                        isActive === "dashboard"
                                            ? "#fff"
                                            : "#4f7439",
                                    color:
                                        isActive === "dashboard"
                                            ? "#4f7439"
                                            : "#fff",
                                    padding:
                                        isActive === "dashboard"
                                            ? "1rem 1rem"
                                            : "1rem 1rem",
                                    borderRadius:
                                        isActive === "dashboard" ? "39px" : "0",
                                    transition:
                                        isActive === "dashboard"
                                            ? "all 0.3s ease-in-out"
                                            : "none",
                                }}
                                onClick={() => {
                                    setIsActive("dashboard");
                                    console.log(setIsActive);
                                }}
                            >
                                <SiHomeassistantcommunitystore />
                                <span>Dashboard</span>
                            </Link>
                            <Link
                                to="/admins"
                                style={{
                                    backgroundColor:
                                        isActive === "admins"
                                            ? "#fff"
                                            : "#4f7439",
                                    color:
                                        isActive === "admins"
                                            ? "#4f7439"
                                            : "#fff",
                                    padding:
                                        isActive === "admins"
                                            ? "1rem 1rem"
                                            : "1rem 1rem",
                                    borderRadius:
                                        isActive === "admins" ? "39px" : "0",
                                    transition:
                                        isActive === "admins"
                                            ? "all 0.3s ease-in-out"
                                            : "none",
                                }}
                                onClick={() => setIsActive("admins")}
                            >
                                <FiUsers />
                                <span>Admins</span>
                            </Link>
                            <Link
                                to="/categories"
                                style={{
                                    backgroundColor:
                                        isActive === "categories"
                                            ? "#fff"
                                            : "#4f7439",
                                    color:
                                        isActive === "categories"
                                            ? "#4f7439"
                                            : "#fff",
                                    padding:
                                        isActive === "categories"
                                            ? "1rem 1rem"
                                            : "1rem 1rem",
                                    borderRadius:
                                        isActive === "categories"
                                            ? "39px"
                                            : "0",
                                    transition:
                                        isActive === "categories"
                                            ? "all 0.3s ease-in-out"
                                            : "none",
                                }}
                                onClick={() => setIsActive("categories")}
                            >
                                <BiCategory />
                                <span>Categories</span>
                            </Link>
                            <Link
                                to="/transactions"
                                style={{
                                    backgroundColor:
                                        isActive === "transactions"
                                            ? "#fff"
                                            : "#4f7439",
                                    color:
                                        isActive === "transactions"
                                            ? "#4f7439"
                                            : "#fff",
                                    padding:
                                        isActive === "transactions"
                                            ? "1rem 1rem"
                                            : "1rem 1rem",
                                    borderRadius:
                                        isActive === "transactions"
                                            ? "39px"
                                            : "0",
                                    transition:
                                        isActive === "transactions"
                                            ? "all 0.3s ease-in-out"
                                            : "none",
                                }}
                                onClick={() => setIsActive("transactions")}
                            >
                                <AiOutlineTransaction />
                                <span>Transactions</span>
                            </Link>
                        </ul>
                    </div>
                    <div className="sidebar-menu-second">
                        <ul>
                            <Link to="/">
                                <FiLogOut />
                                <span>Logout</span>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <header>
                    <h2>
                        <label htmlFor="nav-toggle">
                            <span className="las la-bars">
                                <AiOutlineBars />
                            </span>
                        </label>
                        Dashboard
                    </h2>
                    <div className="search-wrapper">
                        <span className="las la-search">
                            <BsSearch />
                        </span>
                        <input type="search" placeholder="Search here" />
                    </div>
                    <div className="user-wrapper">
                        <img src="" width={"40px"} height={"40px"} alt="" />
                        <div>
                            <h4>Admin Name</h4>
                            <small>Admin Position</small>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default DashBoard;

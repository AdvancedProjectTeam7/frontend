import React from "react";
import "./dashboard.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBars, AiOutlineTransaction } from "react-icons/ai";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { Link } from "react-router-dom";
import image from "../images/logo.png";

const DashBoard = () => {
    return (
        <div>
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
                            <Link to="/dashboard" className="active">
                                <SiHomeassistantcommunitystore />
                                <span>Dashboard</span>
                            </Link>
                            <Link to="/admins">
                                <FiUsers />
                                <span>Admins</span>
                            </Link>
                            <Link to="/categories">
                                <BiCategory />
                                <span>Categories</span>
                            </Link>
                            <Link to="/transactions">
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
        </div>
    );
};

export default DashBoard;

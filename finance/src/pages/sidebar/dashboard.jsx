import React from "react";
import "./dashboard.css";
import { BsSearch } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { AiOutlineBars, AiOutlineTransaction } from "react-icons/ai";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { Link } from "react-router-dom";

const DashBoard = () => {
    return (
        <div>
            <input type="checkbox" name="" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <span className="lab la-accusoft">
                        <FaChartLine />
                    </span>
                    <h2>Financial App</h2>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="/" className="active">
                                <span className="las la-dashboard">
                                    <SiHomeassistantcommunitystore />
                                </span>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="las la-admins">
                                    <FiUsers />
                                </span>
                                <span>Admins</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="las la-categories">
                                    <BiCategory />
                                </span>
                                <span>Categories</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="las la-transactions">
                                    <AiOutlineTransaction />
                                </span>
                                <span>Transactions</span>
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">
                                    <span className="las la-logout">
                                        <FiLogOut />
                                    </span>
                                    <span>Logout</span>
                                </Link>
                            </li>
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

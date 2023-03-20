import "./dashboard.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBars, AiOutlineTransaction } from "react-icons/ai";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import image from "../images/logo.png";

const DashBoard = () => {
    const location = useLocation();
    console.log(location, window.location.pathname);
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
                                style={
                                    location.pathname === "/dashboard"
                                        ? {
                                              backgroundColor: "#fff",
                                              color: "#4f7439",
                                              padding: "1rem 1rem",
                                              borderRadius: "39px",
                                              transition: "all 0.3s ease-out",
                                          }
                                        : {
                                              backgroundColor: "#4f7439",
                                              color: "#fff",
                                              padding: "1rem 1rem",
                                              borderRadius: "0",
                                              transition: "all 0.3s ease-out",
                                          }
                                }
                            >
                                <SiHomeassistantcommunitystore />
                                <span>Dashboard</span>
                            </Link>
                            <Link
                                to="/admins"
                                style={
                                    location.pathname === "/admins"
                                        ? {
                                              backgroundColor: "#fff",
                                              color: "#4f7439",
                                              padding: "1rem 1rem",
                                              borderRadius: "39px",
                                              transition: "all 0.3s ease-out",
                                          }
                                        : {
                                              backgroundColor: "#4f7439",
                                              color: "#fff",
                                              padding: "1rem 1rem",
                                              borderRadius: "0",
                                              transition: "all 0.3s ease-out",
                                          }
                                }
                            >
                                <FiUsers />
                                <span>Admins</span>
                            </Link>
                            <Link
                                to="/categories"
                                style={
                                    location.pathname === "/categories"
                                        ? {
                                              backgroundColor: "#fff",
                                              color: "#4f7439",
                                              padding: "1rem 1rem",
                                              borderRadius: "39px",
                                              transition: "all 0.3s ease-out",
                                          }
                                        : {
                                              backgroundColor: "#4f7439",
                                              color: "#fff",
                                              padding: "1rem 1rem",
                                              borderRadius: "0",
                                              transition: "all 0.3s ease-out",
                                          }
                                }
                            >
                                <BiCategory />
                                <span>Categories</span>
                            </Link>
                            <Link
                                to="/transactions"
                                style={
                                    location.pathname === "/transactions"
                                        ? {
                                              backgroundColor: "#fff",
                                              color: "#4f7439",
                                              padding: "1rem 1rem",
                                              borderRadius: "39px",
                                              transition: "all 0.3s ease-out",
                                          }
                                        : {
                                              backgroundColor: "#4f7439",
                                              color: "#fff",
                                              padding: "1rem 1rem",
                                              borderRadius: "0",
                                              transition: "all 0.3s ease-out",
                                          }
                                }
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

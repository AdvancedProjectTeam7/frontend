import { AiOutlineBars } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import "./dashboard.css"
export default function Toolsbar() {
    return (
        <>
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
    

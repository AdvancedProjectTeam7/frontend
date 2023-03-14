import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import DashBoard from "../pages/sidebar/dashboard.jsx";
import ProfitComponent from "../pages/profit-goals/profit.js"
// import { ProfitGoal } from "../pages/profit-goals/profit.js";
// import PrivateRoute from "../Review/PrivateRoute.jsx";
// import PublicRoutes from "../Review/PublicRoute.jsx";

class AllRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/profit" element={<ProfitComponent />} />

                </Routes>
            </BrowserRouter>
        );
    }
}
export default AllRoutes;

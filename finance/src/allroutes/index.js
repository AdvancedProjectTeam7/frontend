import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import DashBoard from "../pages/sidebar/dashboard.jsx";
import Transactions from "../pages/transactions/transactions.jsx";
// import PrivateRoute from "../Review/PrivateRoute.jsx";
// import PublicRoutes from "../Review/PublicRoute.jsx";

class AllRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
export default AllRoutes;

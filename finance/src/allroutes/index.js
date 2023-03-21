import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import DashBoard from "../pages/sidebar/dashboard.jsx";
import PrivateRoute from "../Review/PrivateRoute.jsx";
import PublicRoutes from "../Review/PublicRoute.jsx";
import TestPage from "../pages/testPage/testPage.jsx";
import Transactions from "../pages/transactions/transactions.jsx";
import Categories from "../pages/category/category.jsx"
import Charts from "../pages/charts/charts.js"
class AllRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main-table">
                    <DashBoard />
                    <Routes>
                        <Route
                            path="/dashboard"
                            element={<Charts />}
                        />
                        <Route
                            path="/transactions"
                            element={<Transactions />}
                        />
                         <Route
                            path="/Categories"
                            element={<Categories />}
                        />
                        <Route path="/" element={<Login />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
export default AllRoutes;

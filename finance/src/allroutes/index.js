import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import DashBoard from "../pages/sidebar/dashboard.jsx";

import Admin from "../pages/admins-panel/admin.js"
import CreateAdmin from "../pages/admins-panel/create-admin.jsx"

import PrivateRoute from "../Review/PrivateRoute.jsx";
import PublicRoutes from "../Review/PublicRoute.jsx";
import User from "../pages/admins-panel/edit-admin.js";

class AllRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<DashBoard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/add" element={<CreateAdmin />} />
                    <Route path="/edit" element={<User />} />


                </Routes>
            </BrowserRouter>
        );
    }
}
export default AllRoutes;

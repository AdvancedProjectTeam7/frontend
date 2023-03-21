import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import DashBoard from "../pages/sidebar/dashboard.jsx";
import PrivateRoute from "../Review/PrivateRoute.jsx";
import PublicRoutes from "../Review/PublicRoute.jsx";
import TestPage from "../pages/testPage/testPage.jsx";
import Transactions from "../pages/transactions/transactions.jsx";
import Profit from "../pages/profit-goals/profit.js";

class AllRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-table">
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path="/" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/testpage" element={<TestPage />} />
              <Route path="/dashboard" element={<Profit />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default AllRoutes;

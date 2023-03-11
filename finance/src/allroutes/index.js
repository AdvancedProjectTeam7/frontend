import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import Category from "../pages/category/category.js";
import Charts from "../pages/charts/Charts.js"
import PrivateRoute from "../Review/PrivateRoute.jsx";
import PublicRoutes from "../Review/PublicRoute.jsx";

class AllRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/charts" element={<Charts/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default AllRoutes;

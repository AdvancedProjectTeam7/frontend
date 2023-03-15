import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import Category from "../pages/category/category.jsx";
import Charts from "../pages/charts/charts.js"
class AllRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/charts" element={<Charts />} />

        </Routes>
      </BrowserRouter>
    );
  }
}
export default AllRoutes;

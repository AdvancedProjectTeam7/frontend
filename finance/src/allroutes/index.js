import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import Card from "../pages/profit-goals/profit.js";
// import { ProfitGoal } from "../pages/profit-goals/profit.js";
// import PrivateRoute from "../Review/PrivateRoute.jsx";
// import PublicRoutes from "../Review/PublicRoute.jsx";

class AllRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/profit" element={<Card />} />
            
         
        </Routes>
      </BrowserRouter>
    );
  }
}
export default AllRoutes;

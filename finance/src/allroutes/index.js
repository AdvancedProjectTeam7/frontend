import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import PrivateRoute from "../Review/PrivateRoute.jsx";
import PublicRoutes from "../Review/PublicRoute.jsx";
import TestPage from "../pages/testPage/testPage.jsx";
import Transactions from "../pages/transactions/transactions.jsx";
import Profit from "../pages/profit-goals/profit.js";
import ExpenseTransactions from "../pages/expenseTransactions/expenseTransactions.jsx";
import IncomeTransactions from "../pages/incomeTransactions/incomeTransactions.jsx";
import Admin from "../pages/admins-panel/admin.jsx";
import { ToastContainer } from "react-toastify";
class AllRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <ToastContainer />
        <div className="main-table">
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path="/" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/admins" element={<Admin />}></Route>
              <Route
                path="/expensetransactions"
                element={<ExpenseTransactions />}
              ></Route>
              <Route
                path="/incometransactions"
                element={<IncomeTransactions />}
              ></Route>
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

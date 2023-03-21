import { Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DashBoard from "../sidebar/dashboard";
import Cards from "../total-card/card.js";
import "./profit.css";

function ProfitGoalCard() {
  const [profitGoal, setProfitGoal] = useState(100000);
  const [income, setIncome] = useState(0);
  const [expense, setExpenses] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/transactions/income"
        );
        const responses = await axios.get(
          "http://localhost:8000/api/transactions/expense"
        );
        const transactions = response.data.data;
        const transaction = responses.data.data;

        let incomeAmount = 0;
        let expensesAmount = 0;

        // Calculate the total income amount
        for (let i = 0; i < transactions.length; i++) {
          incomeAmount += transactions[i].amount;
        }

        // Calculate the total expenses amount
        for (let i = 0; i < transaction.length; i++) {
          expensesAmount += transaction[i].amount;
        }

        setIncome(incomeAmount);
        setExpenses(expensesAmount);
        setTotal(incomeAmount - expensesAmount);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Calculate the total profit
  const totalProfit = income - expense;

  // Calculate the progress percentage
  const progressPercentage = (totalProfit / profitGoal) * 100;

  // Set the progress bar style
  const progressBarStyle = {
    width: `${progressPercentage}%`,
  };

  function handleInputChange(event) {
    const value = event.target.value;
    const percentage = value;
    setProfitGoal(percentage);
  }

  return (
    <>
    <DashBoard/>
    
    <div className="container-profit">
    <Cards/>
      <div className="card-profit" style={{ width: "50%" }}>
        <div className="card-header">Profit Goal</div>
        <div className="card-body">
          <label htmlFor="profit-input" className="prof-label">Enter Profit Goal ($):</label>
          <input className="profit-input" id="profit-input" type="number" placeholder="profit goal" onChange={handleInputChange} defaultValue="100000"/>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={progressBarStyle}
          ></div>
          <span className="progress_label">
            {`percentage ${progressPercentage.toFixed(1)}%`}
          </span>
        </div>
        {/* <div className="card-body">
          <p className="inc">Income: ${income}</p>
          <p className="exp">Expense: ${expense}</p>
          <p className="tot">Total Profit: ${totalProfit}</p>
        </div> */}
      </div>
    </div>
    </>
  );
}

export default ProfitGoalCard;
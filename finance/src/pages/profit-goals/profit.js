import axios from "axios";
import React, { useEffect, useState } from "react";
import "./profit.css";

function ProfitGoalCard() {
  const [profitGoal, setProfitGoal] = useState(0);
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
    <div className="container-profit">
      <div className="card-profit" style={{ width: "50%" }}>
        <div className="card-header">Profit Goal</div>
        <div className="card-body">
          <label htmlFor="profit-input">Enter Profit Goal ($):</label>
          <input id="profit-input" type="number" onChange={handleInputChange} />
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
        <div className="card-body">
          <p>Income: ${income}</p>
          <p>Expense: ${expense}</p>
          <p>Total Profit: ${totalProfit}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfitGoalCard;

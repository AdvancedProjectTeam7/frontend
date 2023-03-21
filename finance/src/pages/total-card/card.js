import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";
import DashBoard from "../sidebar/dashboard";


const Card = ({ title, value, icon, type }) => {
  let cardClass = "card";
  if (type === "income") {
    cardClass += " income";
  } else if (type === "expenses") {
    cardClass += " expenses";
  }

  return (
    <div className={cardClass}>
      <div className="card-header">
        <i className={icon}></i>
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <h2>{value}</h2>
      </div>
    </div>
  );
};

const Cards = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
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

  const incomeData = {
    title: "Income",
    value: `+${income} $`,
    type: "income",
    icon: "fa fa-arrow-up",
  };

  const expensesData = {
    title: "Expenses",
    value: `-${expenses} $`,
    type: "expenses",
    icon: "fa fa-arrow-down",
  };

  const totalData = {
    title: "Total",
    value: `${total} $`,
    type: total >= 0 ? "income" : "expenses",
    icon: "fa fa-line-chart",
  };

  return (
    <div className="card-container">
    <DashBoard/>
      <div className="cards">
        <div className="cards-1">
          <Card {...incomeData} />
        </div>
        <div className="cards-1">
          <Card {...expensesData} />
        </div>
        <div className="cards-1">
          <Card {...totalData} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
import React from "react";
import "./card.css";

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
  const income = 1000;
  const expenses = 350;
  const total = income - expenses;

  const cardData = [
    {
      title: "Income",
      value: `+${income} $`,
      type: "income",
    },
    {
      title: "Expense",
      value: `-${expenses} $`,
      type: "expenses",
    },
    {
      title: "Total",
      value: `${total} $`,
      type: total >= 0 ? "income" : "expenses",
    },
  ];

  return (
    <div className="card-container">
      <div className="cards">
        {cardData.map((card, index) => (
          <div key={index} className="cards-1">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

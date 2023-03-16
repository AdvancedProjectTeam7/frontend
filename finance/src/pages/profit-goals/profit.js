import axios from "axios";
import React, { useEffect, useState } from "react";
import "./profit.css";

function ProfitGoalCard() {
  const [profitGoal, setProfitGoal] = useState(100000);
  // const [incomeCount, setincomeCount]=useState(0);
  // const [expenseCount, setexpenseCount]=useState(0);


  function handleInputChange(event) {
    const value = event.target.value;
    const percentage = (value / 100000) * 100;
    setProfitGoal(percentage);
  }

  const progressBarStyle = {
    width: `${profitGoal}%`,
  };

  // const getIncome = async (e) => {
  //   await axios.get("http://localhost:8000/api/category/type/income")
  //     .then((response) => {
  //       setincomeCount(response.data);
  //     });  
  // };
  
  // const getExpense = async (e) => {
  //   await axios.get("http://localhost:8000/api/category/type/expense")
  //     .then((response) => {
  //       setexpenseCount(response.data);
  //     });
  // };
  // useEffect(() => {
  //   getExpense();
  //   getIncome();
  // }, []);

  return (
    <div className="container-profit">
      <div className="card" style={{ width: "50%" }}>
        <div className="card-header">Profit Goal</div>
        <div className="card-body">
          <label htmlFor="profit-input">Enter Profit Goal ($):</label>
          <input
            id="profit-input"
            type="number"
            value={profitGoal * 1000}
            onChange={handleInputChange}
          />
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={progressBarStyle}
            >
             
             </div>
             <span className="progress_label"> {`percentage ${profitGoal}%`}</span> 
        </div>
      </div>
    </div>
  );
}

export default ProfitGoalCard;

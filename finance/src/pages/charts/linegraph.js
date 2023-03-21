import React from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
const LineGraph = () => {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "incomes",
        backgroundcolor: "rgba(75,192,192,1)",
        bordercolor: "rgba(0,0,0,1)",
        borderwidth: 2,
        data: [65, 45, 123, 42, 43],
      },
    ],
  };
  const options = {
    Plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        text: "Average Rainfall per month",
        display: true,
        fontSize: 20,
      },
    },
  }; 

  return (
    <div className="linegraph">
      <Line data={state} options={options} />
    </div>
  );
};
export default LineGraph;
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const PieGraph = () => {
  const state = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Rainfall",
        backgroundcolor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
          "#800000",
          "#FF0000",
          "#0000FF",
          "#FFFF00",
          "#00ffff",
          "#000000",
        ],
        bordercolor: "rgba(0,0,0,1)",
        borderwidth: 2,
        data: [65, 45, 123, 42, 43, 65, 45, 123, 42, 43, 123, 42],
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
        text: "Average Incomes per month",
        display: true,
        fontSize: 20,
      },
    },
  };

  return (
    <div className="PieGraph">
      <Pie data={state} options={options} />
    </div>
  );
};
export default PieGraph;

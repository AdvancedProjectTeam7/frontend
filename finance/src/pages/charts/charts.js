import React from "react";
import "./charts.css";
import LineGraph from "./linegraph";
import PieGraph from "./piechart";

const Charts = () => {
  return (
    <div className="charts">
      <h2>Charts</h2>
      <div className="wrapper">
        <LineGraph />
        <PieGraph />
      </div>
    </div>
  );
};

export default Charts;

import React from "react";
import "./charts.css";
import LineGraph from "./linegraph";
import PieGraph from "./piechart";

const Charts = () => {
  return (
    <>
        <div className="wrapper">
          <LineGraph />
          <PieGraph />
        </div>
    </>
  );
};

export default Charts;

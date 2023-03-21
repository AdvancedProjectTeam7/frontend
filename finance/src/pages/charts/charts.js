import React from "react";
import "./charts.css";
import LineGraph from "./linegraph";
import PieGraph from "./piechart";
import axios from "axios";
const Charts = () => {
  const URL = "http://localhost:8000/";

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

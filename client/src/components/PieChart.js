import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = (props) => {
  return (
    <div style={{width:"25%"}}>
      <Pie data={props.data}></Pie>
    </div>
  );
};

export default PieChart;

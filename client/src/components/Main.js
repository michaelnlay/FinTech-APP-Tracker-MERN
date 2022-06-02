import React from "react";
import MixedChart from "./MixedChart";
import PieChart from "./PieChart";
import Chart from "chart.js/auto";

// Example of 3 different data sets
const data1 = [1, 10, 15, 18, 20, 10];
const data2 = [2, 3, 10, 10, 5, 9];
// const total = data1.map((num, idx) => num + data2[idx]);
//Inside data props
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Income",
      data: data1,
      backgroundColor: "rgba(87, 121, 234, 0.6)",
      borderColor: "rgba(87, 121, 234, 0.6)",
      order: 1,
    },
    {
      label: "Expenses",
      data: data2,
      backgroundColor: "rgba(18, 200, 150, 0.6)",
      borderColor: "rgba(18, 200, 150, 0.6)",
      order: 1,
    },
  ],
};
//PIE Data (Sample Codes ONLY)==================================================
const piedata = {
  labels: [
    //category
    "Home & Utilities",
    "Transportation",
    "Groceries",
    "Restaurants & Dining",
    "Shopping & Entertainment",
  ],
  datasets: [
    {
      label: "My First Dataset", //name
      data: [30, 50, 100, 220, 60], //amount
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "purple",
        "green",
      ],
      hoverOffset: 30,
    },
  ],
};

export default function Main(props) {
  let colors = [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 205, 86)",
    "purple",
    "green",
  ];
  //You can make API call to get the necessary data here
  //and pass as props to relevant chart component
  console.log(props.expenses);

  let pie = { labels: [], datasets: [{ data: [], backgroundColor: colors }] };
  let dupExp = {};
  for (let objExp of props.expenses) {
    if (!dupExp[objExp.category]) {
      dupExp[objExp.category] = objExp.amount;
    } else {
      dupExp[objExp.category] += objExp.amount;
    }
  }
  for (let cat in dupExp) {
    pie.labels.push(cat);
    pie.datasets[0].data.push(dupExp[cat]);
  }

  return (
    <div className="d-flex justify-content-around p-2">
      <MixedChart data={data} />
      <PieChart data={pie}></PieChart>
    </div>
  );
}

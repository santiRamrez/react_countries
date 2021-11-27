import React from "react";
import { Bar, defaults } from "react-chartjs-2";
import "./styles/TheChart.css";

defaults.color = "#ffffff";
defaults.borderColor = "rgba(255, 255, 255, 0.4)";
console.log(defaults);

//Component here!!
const TheChart = ({ countries = [], label = "", dataParam = [] }) => {
  const data = {
    //data and labels are related as the index position into the array
    labels: countries,
    datasets: [
      {
        label: label ? label : "Please select an option",
        data: dataParam,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="theChart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default TheChart;

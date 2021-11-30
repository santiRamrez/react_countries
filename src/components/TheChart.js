import React from "react";
import { Bar, defaults } from "react-chartjs-2";
import "./styles/TheChart.css";

//Utils
import formatingNumbers from "../utils/formatingNumbers";

defaults.color = "#ffffff";
defaults.borderColor = "rgba(255, 255, 255, 0.4)";
console.log(defaults.font);

//Component here!!
const TheChart = ({ countries = [], label = "", dataParam = [], param }) => {
  const data = {
    //data and labels are related as the index position into the array
    labels: countries,
    datasets: [
      {
        label: label ? label : "Please select an option",
        data: dataParam,
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(255, 159, 64, 0.3)",
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
    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            if (param === "Population") return formatingNumbers(value) + " M";
            if (param === "Area") return formatingNumbers(value) + " Km2";
            if (param === "Salary") return "USD " + formatingNumbers(value);
            if (!param) return value + " -";
          },
        },
      },
    },
  };

  return (
    <div className="theChart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default TheChart;

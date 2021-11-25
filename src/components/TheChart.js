import React from "react";
import { Bar } from "react-chartjs-2";
import "./styles/TheChart.css";

//Component here!!
const TheChart = ({ showData, countries = [] }) => {
  //showData has the entire information from the API
  //countries has the array of selected countries from the autocomplete
  let listOfCountries = showData.map((obj) => obj.name.common);
  let arrOfPopulation = showData.map((obj) => obj.population);

  const data = {
    //data and labels are related as the index position into the array
    labels: [...listOfCountries],
    datasets: [
      {
        label: "# of Votes",
        data: [...arrOfPopulation],
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
        color: ["#f4f4f4"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="theChart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default TheChart;

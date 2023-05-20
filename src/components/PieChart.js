import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#F7DC7D", "#EE8484"],
        borderColor: ["#98D89E", "#F7DC7D", "#EE8484"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-32">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

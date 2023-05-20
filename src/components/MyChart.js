import React from "react";
import { Line } from "react-chartjs-2";
import { RedDot, GreenDot } from "../assets/image";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MyChart = () => {
  const data = {
    labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
    datasets: [
      {
        label: "My First Dataset",
        data: [100, 200, 300, 100, 0, 400, 500, 100, 200, 300, 400, 100],
        fill: true,
        borderColor: "#E9A0A0",
        tension: 0.5,
      },
      {
        label: "My First Dataset",
        data: [200, 300, 400, 100, 500, 300, 400],
        fill: false,
        borderColor: "#9BDD7C",
        spanGaps: 10,
        tension: 0.5,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
        afterFit: function (scale) {
          scale.width = 100;
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    yAxes: [
      {
        afterFit: function (scale) {
          scale.width = 2000;
        },
      },
    ],
  };

  return (
    <div className="bg-white rounded-3xl p-4 w-[950px] h-60 mt-4">
      <div>
        <div className="font-bold text-lg">Activities</div>
        <div className="flex justify-between">
          <div>
            <input type="date" />
          </div>
          <div>
            <ul className="flex gap-10">
              <li className="flex relative">
                <img
                  className="w-3 rounded-full h-3 absolute top-2 right-12"
                  src={RedDot}
                  alt="red-dot"
                />
                Guest
              </li>
              <li className="flex relative">
                <img
                  className="w-3 rounded-full h-3 absolute top-2 right-10"
                  src={GreenDot}
                  alt="green-dot"
                />
                User
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default MyChart;

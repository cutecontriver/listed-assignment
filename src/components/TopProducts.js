import React from "react";
import PieChart from "./PieChart";
import { YellowDot, RedDot, GreenDot } from "../assets/image";

const TopProducts = () => {
  return (
    <div className="p-8 py-4 bg-white rounded-2xl mt-2">
      <div className="flex justify-between gap-20">
        <div className="font-bold text-lg">Top Products</div>
        <div>
          <input type="date" />
        </div>
      </div>
      <div className="flex gap-20">
        <div>
          <PieChart />
        </div>
        <div>
          <ul>
            <li className="font-normal text-xs mt-2">
              <div className="flex font-bold text-sm gap-4">
                <img
                  className="w-3 rounded-full h-3 mt-1 ml-4"
                  src={GreenDot}
                  alt="green-dot"
                />
                Basic Tees
              </div>
              <div className="pl-11">55%</div>
            </li>
            <li className="font-normal text-xs mt-2">
              <div className="flex font-bold text-sm gap-4">
                <img
                  className="w-3 rounded-full h-3 mt-1 ml-4"
                  src={YellowDot}
                  alt="Yellow-dot"
                />
                Custom Short Pants
              </div>
              <div className="pl-11">31%</div>
            </li>
            <li className="font-normal text-xs mt-2">
              <div className="flex font-bold text-sm gap-4">
                <img
                  className="w-3 rounded-full h-3 mt-1 ml-4"
                  src={RedDot}
                  alt="red-dot"
                />
                Super Hoodies
              </div>
              <div className="pl-11">14%</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

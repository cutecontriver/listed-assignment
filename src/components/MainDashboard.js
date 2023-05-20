import React from "react";
import {
  NotificationIcon,
  LoginUserImage,
  SearchIcon,
  TotalRevenueIcon,
  TotalTransactionIcon,
  TotalUserIcon,
  LikesIcon,
} from "../assets/image";
import Card from "./Card";
import MyChart from "./MyChart";
import TopProducts from "./TopProducts";
import TodaySchedule from "./TodaySchedule";

const MainDashboard = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-2xl">Dashboard</h2>
        </div>
        <div className="flex gap-8 ">
          <div className="flex w-36 h-8 absolute left-[56rem] rounded-l-xl px-4">
            <input
              className="border-none p-2 rounded-l-xl"
              type="text"
              placeholder="Search..."
            />
            <img
              className="w-8 bg-white p-2 rounded-r-xl"
              src={SearchIcon}
              alt="search-icon"
            />
          </div>
          <div className="flex flex-col justify-center">
            <img
              className="w-5"
              src={NotificationIcon}
              alt="notification-icon"
            />
          </div>
          <div>
            <img
              className="w-8 rounded-full"
              src={LoginUserImage}
              alt="user-img"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-5">
        <div className="bg-[#DDEFE0] rounded-2xl">
          <Card
            title="Total Revenues"
            value="$2,129,430"
            icon={TotalRevenueIcon}
          />
        </div>
        <div className="bg-[#F4ECDD] rounded-2xl">
          <Card
            title="Total Transactions"
            value="1,520"
            icon={TotalTransactionIcon}
          />
        </div>
        <div className="bg-[#EFDADA] rounded-2xl">
          <Card title="Total Likes" value="9,721" icon={LikesIcon} />
        </div>
        <div className="bg-[#DEE0EF] rounded-2xl">
          <Card title="Total Users" value="892" icon={TotalUserIcon} />
        </div>
      </div>
      <div className="">
        <MyChart />
      </div>
      <div className="flex justify-between">
        <TopProducts />
        <TodaySchedule />
      </div>
    </div>
  );
};

export default MainDashboard;

import React from "react";
import {
  DashboardIcon,
  TransactionIcon,
  ScheduleIcon,
  UserIcon,
  SettingIcon,
} from "../assets/image";

const NavBar = ({ handleClick }) => {
  return (
    <div className="bg-black w-1/5 h-full rounded-3xl text-white px-12 py-16">
      <div>
        <h2 className="font-bold text-4xl">Board.</h2>
      </div>
      <div>
        <ul>
          <li className="flex pt-16 font-bold">
            <img
              className="w-6 mr-4"
              src={DashboardIcon}
              alt="dashboard-icon"
            />
            Dashboard
          </li>
          <li className="flex pt-3 font-normal">
            <img
              className="w-6 mr-4"
              src={TransactionIcon}
              alt="transaction-icon"
            />
            Transaction
          </li>
          <li className="flex pt-3 font-normal">
            <img className="w-6 mr-4" src={ScheduleIcon} alt="schedule-icon" />
            Schedules
          </li>
          <li className="flex pt-3 font-normal">
            <img className="w-6 mr-4" src={UserIcon} alt="user-icon" />
            Users
          </li>
          <li className="flex pt-3 font-normal">
            <img className="w-6 mr-4" src={SettingIcon} alt="settings-icon" />
            Settings
          </li>
        </ul>
      </div>
      <div className="mt-44 font-normal">
        <ul>
          <li>Help</li>
          <li>Contact Us</li>
          <li onClick={handleClick} className="cursor-pointer font-bold">
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

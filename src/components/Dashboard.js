import React from "react";
import NavBar from "./NavBar";
import MainDashboard from "./MainDashboard";
import { useUserAuth } from "../context/UserAuthContext";

const Dashboard = () => {
  const { user, logOut } = useUserAuth();
  console.log(user);
  const handleClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="p-4 px-12 h-screen flex gap-10 bg-[#DDDDDD]">
      <NavBar handleClick={handleClick} />
      <MainDashboard />
    </div>
  );
};

export default Dashboard;

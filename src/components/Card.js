import React from "react";

const Card = ({ title, value, icon, color }) => {
  return (
    <div className="w-52 h-28 relative">
      <div className="pl-4 pt-9">{title}</div>
      <div className="pl-4 pb-4 font-bold text-2xl">{value}</div>
      <div>
        <img
          className="w-6 absolute top-4 right-4"
          src={icon}
          alt="card-icon"
        />
      </div>
    </div>
  );
};

export default Card;

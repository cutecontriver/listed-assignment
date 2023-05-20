import React from "react";
import { RightArrow } from "../assets/image";

const TodaySchedule = () => {
  return (
    <div className="p-12 py-4 bg-white rounded-2xl mt-2">
      <div className="flex justify-between gap-24">
        <div className="font-bold text-lg">Today’s schedule</div>
        <div className="flex font-normal text-xs gap-1 mt-2">
          <div>See All</div>
          <img className="w-1 h-2 mt-1" src={RightArrow} alt="right-arrow" />
        </div>
      </div>
      <div className="mt-2 pr-16">
        <div className="border-l-4 border-[#9BDD7C]">
          <p className="font-bold text-sm ml-2">
            Meeting with suppliers from Kuta Bali
          </p>
          <p className="font-normal text-xs ml-2">14.00-15.00</p>
          <p className="font-normal text-xs ml-2">at Sunset Road, Kuta, Bali</p>
        </div>
        <div className="mt-2 border-l-4 border-[#6972C4]">
          <p className="font-bold text-sm ml-2">
            Check operation at Giga Factory 1
          </p>
          <p className="font-normal text-xs ml-2">18.00-20.00</p>
          <p className="font-normal text-xs ml-2">at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default TodaySchedule;

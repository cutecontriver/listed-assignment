import React from "react";
import Board from "./Board";
import MainSignUp from "./MainSignUp";

const SignUp = () => {
  return (
    <div className="flex">
      <div className="w-2/5">
        <Board />
      </div>
      <div className="w-3/5 pl-40 pt-28 bg-[#F5F5F5] h-screen">
        <MainSignUp />
      </div>
    </div>
  );
};

export default SignUp;

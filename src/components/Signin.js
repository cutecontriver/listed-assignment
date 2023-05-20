import React from "react";
import Board from "./Board";
import MainSignin from "./MainSignin";

const Signin = () => {
  return (
    <div className="flex">
      <div className="w-2/5">
        <Board />
      </div>
      <div className="w-3/5 pl-40 pt-28 bg-[#F5F5F5] h-screen">
        <MainSignin />
      </div>
    </div>
  );
};

export default Signin;

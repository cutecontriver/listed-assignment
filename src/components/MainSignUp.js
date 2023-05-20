import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const MainSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col w-3/4">
      <div>
        <h2 className="font-bold text-4xl">Sign Up</h2>
      </div>
      <div className="mt-2 mb-2">
        <h3>Sign Up to your account</h3>
      </div>
      <div className="bg-white rounded-lg p-6 mt-6">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            Email address
            <input
              className="bg-[#F5F5F5] rounded-lg mt-4 h-9"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col mt-4">
            Password
            <input
              className="bg-[#F5F5F5] rounded-lg mt-4 h-9"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="text-white bg-black rounded-lg h-9 mt-6"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="text-[#858585] flex justify-center mt-4">
        Have an account?{" "}
        <span className="text-[#346BD4]">
          <Link to="/">LogIn here</Link>
        </span>
      </div>
    </div>
  );
};

export default MainSignUp;

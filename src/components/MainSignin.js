import React, { useState } from "react";
import { AppleIcon, GoogleIcon } from "../assets/image";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const MainSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, resetPassword } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };
  const forgotPasswordHandler = () => {
    const mail = email;
    if (mail) resetPassword(mail);
    setEmail("");
  };
  return (
    <div className="flex flex-col w-3/4">
      <div>
        <h2 className="font-bold text-4xl">Sign In</h2>
      </div>
      <div className="mt-2 mb-2">
        <h3>Sign in to your account</h3>
      </div>
      <div className="flex gap-5 mt-2 justify-between">
        <div
          className="w-52 bg-white text-[#858585] py-2 px-4 rounded-lg flex flex-row justify-center cursor-pointer"
          onClick={handleClick}
        >
          <img src={GoogleIcon} className="mr-2 w-5" alt="google-icon" />
          Sign in with google
        </div>
        <div
          className="w-52 bg-white text-[#858585] py-2 px-4 rounded-lg flex flex-row justify-center cursor-pointer"
          onClick={handleClick}
        >
          <img src={AppleIcon} className="mr-2 w-5" alt="apple-icon" />
          Signin with apple
        </div>
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
          <p
            className="text-[#346BD5] mt-2 mb-2 cursor-pointer"
            onClick={forgotPasswordHandler}
          >
            Forgot password?
          </p>
          <button className="text-white bg-black rounded-lg h-9" type="submit">
            Sign In
          </button>
        </form>
      </div>
      <div className="text-[#858585] flex justify-center mt-4">
        Don’t have an account?{" "}
        <span className="text-[#346BD4]">
          <Link to="/signup">Register here</Link>
        </span>
      </div>
    </div>
  );
};

export default MainSignin;

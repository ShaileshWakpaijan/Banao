import React, { useState } from "react";
import { CloseEye, FacebookLogo, GoogleLogo, OpenEye, Lock } from "../utils/Logos";

const Signup = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [passwordType, setPasswordType] = useState(true);
  return (
    <div className=" p-5 md:p-0 md:w-[30%] flex flex-col h-fit">
      <div className=" flex justify-center md:justify-start gap-5 font-medium mb-7">
        <span
          className={` text-lg md:text-xl cursor-pointer ${
            isSignin
              ? "text-[#8064A2] border-b-2 border-[#8064A2]"
              : "text-[#939CA3]"
          } pb-2`}
          onClick={() => setIsSignin(true)}
        >
          Sign In
        </span>
        <span
          className={`text-lg md:text-xl cursor-pointer ${
            !isSignin
              ? "text-[#8064A2] border-b-2 border-[#8064A2]"
              : "text-[#939CA3]"
          } pb-2`}
          onClick={() => setIsSignin(false)}
        >
          Join In
        </span>
      </div>
      <div className=" flex flex-col-reverse md:flex-col">
        <div className=" flex flex-col-reverse md:flex-col gap-8 pt-9 md:pt-0">
          <div className=" flex flex-col gap-4">
            <button className=" border border-[#8064A2] text-sm font-semibold py-2 px-5 rounded-lg flex justify-between items-center">
              <span>
                <GoogleLogo />
              </span>
              Continue with Google<span></span>
            </button>
            <button className=" border border-[#8064A2] text-sm font-semibold py-2 px-5 rounded-lg flex justify-between items-center">
              <span>
                <FacebookLogo />
              </span>
              Continue with Facebook<span></span>
            </button>
          </div>
          <div className=" bg-gray-300 h-[2px] flex items-center justify-center">
            <p className=" text-xs font-semibold bg-[#F7F5F9] px-3">
              Or connect with
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-3 md:pt-9">
          <input
            className=" text-xs px-3 py-3 rounded-lg border outline-none"
            type="email"
            name=""
            placeholder="Email"
          />
          <div className=" bg-white rounded-lg border overflow-hidden flex items-center justify-between pr-3">
            <input
              className=" w-11/12 text-xs px-3 py-3 outline-none"
              type={passwordType ? "password" : "text"}
              name=""
              placeholder="Password"
            />
            <div
              className=" cursor-pointer p-2"
              onClick={() => setPasswordType(!passwordType)}
            >
              {passwordType ? <CloseEye /> : <OpenEye />}
            </div>
          </div>
          {isSignin && (
            <p className=" cursor-pointer text-[0.7rem] text-[#939CA3] self-end py-1">
              Password strength
            </p>
          )}
          <div className=" flex flex-col gap-3">
            {isSignin ? (
              <p className=" text-xs text-[#6D747A] text-center font-medium">
                By continuing, you agree to our{" "}
                <span className="text-[#08090A]">Terms of Service</span> and{" "}
                <span className="text-[#08090A]">Privacy Policy</span>.
              </p>
            ) : (
              <div className=" flex items-center justify-between p-2">
                <span className=" text-xs text-black font-medium flex gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id="remember"
                    className=" accent-[#8064A2] cursor-pointer"
                  />{" "}
                  <label htmlFor="remember" className=" cursor-pointer">
                    Remember me
                  </label>
                </span>
                <span className=" text-xs text-black font-medium flex gap-2 cursor-pointer">
                  <Lock /> Forgot Password
                </span>
              </div>
            )}
            <button className=" bg-[#8064A2] py-2 rounded-lg text-sm font-semibold text-white">
              {isSignin ? "Agree and Continue" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

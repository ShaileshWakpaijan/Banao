import React from "react";
import HomeContent from "./HomeContent";
import Signup from "./Signup";

const Home = () => {
  return (
    <div className=" bg-[#F7F5F9] flex flex-col md:min-h-0 justify-between overflow-hidden">
      <div className="sm:w-[80%] h-screen max-h-[800px] sm:mx-auto md:w-full md:flex justify-evenly pt-24 lg:pt-32">
        <HomeContent />
        <Signup />
      </div>
      <div
        id="images"
        className="flex md:hidden sm:w-[80%] sm:mx-auto md:w-full"
      >
        <img className=" w-[50%]" src="/image2.png" alt="" />
        <img className=" w-[50%]" src="/image.png" alt="" />
      </div>
    </div>
  );
};

export default Home;

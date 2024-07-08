import React from "react";
import Card from "./Card";
import { DoubleQuotes, PlayButton } from "../utils/Logos";

const Page4 = () => {
  const item = {
    title: "Testimonials",
    description:
      "In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.",
    logo: <DoubleQuotes />,
    extraItem: <PageBottom />,
  };
  return (
    <div className=" py-20">
      <div className="w-[95%] sm:w-[80%] mx-auto bg-[#F7F5F9]">
        <Card item={item} />
      </div>
    </div>
  );
};

const PageBottom = () => {
  return (
    <div className=" flex items-center justify-between flex-col-reverse gap-6 md:flex-row">
      <div className="flex items-center bg-[#CCC1DA] justify-between w-full md:w-8/12 px-5 py-2 rounded-md">
        <div className=" w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
          <PlayButton />
        </div>
        <div className=" flex items-center gap-2 w-8/12">
          <input type="range" name="" id="" className=" w-full h-1 appearance-none accent-[#8064A2] bg-[#8064A2]" />{" "}
          <span className="text-[#8064A2] text-xs">0.00</span>
        </div>
        <div className=" w-10 md:w-16">
          <img src="/profile.png" className=" rounded-full" alt="" />
        </div>
      </div>
      <div className=" flex items-center gap-5">
        <div className="w-10 md:w-20">
          <img src="/profile.png" className=" rounded-full" alt="" />
        </div>
        <div className=" flex flex-col gap-1">
          <h3 className=" font-semibold text-[#8064A2]">Shubha Nagarajan</h3>
          <p className=" text-[#0096C8] text-sm">Classical Dancer</p>
        </div>
      </div>
    </div>
  );
};

export default Page4;

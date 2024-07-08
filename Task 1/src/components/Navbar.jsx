import React from "react";
import {
  Arrow,
  Bell,
  Cart,
  Explore,
  Hamburger,
  Save,
  Search,
  SearchPurple,
  Star,
} from "../utils/Logos";

const Navbar = () => {
  return (
    <div className=" shadow-md py-3 flex gap-7 items-center justify-between lg:justify-evenly px-3 lg:px-0 fixed z-20 top-0 left-0 w-screen bg-white">
      <div className=" flex items-center gap-10">
        <div className=" w-36 sm:w-52 gap-10">
          <img src="/BrandLogo.png" alt="" />
        </div>
        <div className=" hidden lg:flex items-center justify-center">
          <input
            className=" w-60 text-xs px-3 h-9 py-2 outline-none rounded-lg rounded-r-none border border-r-0"
            type="email"
            name=""
            placeholder="Email"
          />
          <span className=" flex items-center justify-center h-9 px-3 bg-[#8064A2] rounded-lg rounded-l-none border border-[#8064A2] border-l-0">
            <Search />
          </span>
        </div>
      </div>
      <div className=" flex items-center gap-3 lg:hidden">
        <SearchPurple /> <Bell /> <Hamburger />
      </div>
      <div className=" hidden lg:flex items-center gap-5">
        <li className=" list-none flex gap-1 items-center cursor-pointer">
          <Explore />
          Explore
          <Arrow />
        </li>
        <li className=" list-none flex gap-1 items-center cursor-pointer">
          <Star />
          Hobbies
          <Arrow />
        </li>
        <Save />
        <Bell />
        <Cart />
        <button className=" border-2 py-1 px-3 rounded-lg border-[#8064A2] ">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;

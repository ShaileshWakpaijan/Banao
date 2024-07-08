import React from "react";
import {
  EmailDark,
  FacebookDark,
  GooglePlusDark,
  InstaDark,
  PintrestDark,
  TelegramDark,
  TwitterDark,
  YoutubeDark,
} from "../utils/Logos";

const Footer = () => {
  return (
    <div>
      <div className=" bg-[#F7FDFF] w-full px-5 sm:px-20 md:px-36 py-5 sm:py-8">
        <div className=" py-8 md:py-28">
          <h4 className=" font-semibold text-lg md:text-3xl italic mb-4 md:mb-10">
            Your <span className=" text-[#8064A2]">Hobby,</span> Your
            <span className=" text-[#0096C8]"> Community...</span>
          </h4>
          <button className=" px-4 py-1 sm:py-2 rounded-lg text-sm md:text-base text-white bg-[#8064A2] ">
            Get started
          </button>
        </div>
        <div className=" w- flex justify-center">
          <img className=" w-1/2" src="/bottom1.png" alt="" />
          <img className=" w-1/2" src="/bottom2.png" alt="" />
        </div>
      </div>

      <div className=" flex flex-col sm:flex-row px-5 sm:px-0 gap-8 sm:gap-0 justify-around py-5 sm:py-16">
        <div>
          <h5 className=" font-bold">Hobbycue</h5>
          <ul className=" sm:text-sm flex flex-col gap-2 mt-4 sm:text-black text-[#6D747A] text-xs">
            <li>About us</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h5 className=" font-bold">How Do I</h5>
          <ul className=" sm:text-sm flex flex-col gap-2 mt-4 sm:text-black text-[#6D747A] text-xs">
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
        </div>
        <div>
          <h5 className=" font-bold">Quick Links</h5>
          <ul className=" sm:text-sm flex flex-col gap-2 mt-4 sm:text-black text-[#6D747A] text-xs">
            <li>Listings</li>
            <li>Blog Posts</li>
            <li>Shop / Store</li>
            <li>Community</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-10 justify-between">
          <div>
            <h5 className=" font-bold">Social Media</h5>
            <div className=" flex gap-3 mt-4 justify-between">
              <FacebookDark />
              <TwitterDark />
              <InstaDark />
              <PintrestDark />
              <GooglePlusDark />
              <YoutubeDark />
              <TelegramDark />
              <EmailDark />
            </div>
          </div>
          <div>
            <h5 className=" font-bold">Invite Friends</h5>
            <div className="flex mt-4">
              <input
                className=" w-60 text-xs px-3 h-9 py-2 outline-none rounded-lg rounded-r-none border border-r-0"
                type="email"
                name=""
                placeholder="Email"
              />
              <span className=" flex items-center justify-center h-9 px-3 bg-[#8064A2] rounded-lg rounded-l-none border border-[#8064A2] border-l-0 text-sm text-white">
                Invite
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F7F5F9] text-sm py-4 sm:py-7 font-semibold text-center">
        © Purple Cues Private Limited
      </div>
    </div>
  );
};

export default Footer;

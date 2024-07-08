import React from "react";

const HomeContent = () => {
  return (
    <div className="px-5 md:px-0 md:w-[50%] flex flex-col justify-between ">
      <div>
        <h1 className=" font-semibold text-xl md:text-4xl italic mb-5 md:mb-10">
          Explore your <span className=" text-[#0096C8]">hobby</span> or{" "}
          <span className=" text-[#8064A2]">passion</span>
        </h1>
        <p className=" mb-5 leading-6 md:leading-7 text-sm line-clamp-4">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p className=" mb-5 leading-7 text-sm hidden md:block">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
      </div>
      <div id="images" className=" hidden md:flex">
        <img className=" w-[50%]" src="/image2.png" alt="" />
        <img className=" w-[50%]" src="/image.png" alt="" />
      </div>
    </div>
  );
};

export default HomeContent;

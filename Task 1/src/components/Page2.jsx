import React from "react";
import Card from "./Card";
import { LocationLogo, PeopleLogo, ProductLogo, ProgramLogo } from "../utils/Logos";

const Page2 = () => {
  const cardContent = [
    {
      title: "People",
      description:
        "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
      button: "Connect",
      logo: <PeopleLogo />,
    },
    {
      title: "Place",
      description:
        "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
      button: "Meet up",
      logo: <LocationLogo />,
    },
    {
      title: "Product",
      description:
        "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
      button: "Get it",
      logo: <ProductLogo />,
    },
    {
      title: "Program",
      description:
        "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
      button: "Attend",
      logo: <ProgramLogo />,
    },
  ];

  return (
    <div className=" bg-white w-full py-28">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 w-[95%] sm:w-[80%] mx-auto">
        {cardContent.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Page2;

import React from "react";
import Card from "./Card";
import { AddLogo } from "../utils/Logos";

const Page3 = () => {
  const item = {
    title: "Add your own",
    description:
      "Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page",
    button: "Add new",
    logo: <AddLogo />,
  };
  return (
    <div className=" bg-[#F7FDFF] py-20">
      <div className="w-[95%] sm:w-[80%] mx-auto">
        <Card item={item} />
      </div>
    </div>
  );
};

export default Page3;

import React from "react";

const Card = ({ item }) => {
  return (
    <div className=" border p-5 sm:p-10 rounded-lg flex sm:block flex-col">
      <h3 className=" flex items-center gap-3 text-lg font-semibold mb-5 w-fit mx-auto sm:mx-0">
        <span className="">{item.logo}</span>
        {item.title}
      </h3>
      <p className=" mb-5 leading-7 text-sm text-center sm:text-start">
        {item.description}
      </p>
      {item.button && (
        <button className=" border-2 py-1 px-10 rounded-lg border-[#8064A2] ">
          {item.button}
        </button>
      )}
      {item.extraItem}
    </div>
  );
};

export default Card;

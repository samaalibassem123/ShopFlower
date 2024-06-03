import React from "react";

export default function loading() {
  return (
    <div className="w-full h-full flex lg:items-start items-center justify-center  text-3xl text-white ">
      <div className="flex items-center">
        <img
          src="/Nectar_Logo_White_Icon+(1).png"
          className=" w-[50px] h-[50px] animate-bounce"
        />
        loading...
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Cards(props) {
  const LinkImg = `/${props.source}`;
  return (
    <Link
      href={LinkImg + "1"}
      className="lg:z-0 -z-20 bg-black relative rounded-lg m-5 w-[300px] h-[400px] shadow-xl transition-all ease-in-out hover:scale-105 hover:shadow-2xl "
    >
      <div className="bg-black/50 flex items-center justify-center absolute h-full w-full rounded-lg">
        <span className="text-white text-5xl w-full text-center">
          {props.name}
        </span>
      </div>
      <img src={LinkImg} className="w-full h-full rounded-lg  cur" />
    </Link>
  );
}

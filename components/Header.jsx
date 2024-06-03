"use client";
import React, { useState } from "react";
import Logo from "@/public/Nectar_Logo_White_Icon+(1).png";
import Image from "next/image";
import Link from "next/link";
import { PiList } from "react-icons/pi";
import { RiCloseLargeFill } from "react-icons/ri";
import { easeInOut, motion } from "framer-motion";
export default function Header() {
  const animateContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const [show, setshow] = useState(false);
  return (
    /*large ui*/
    <>
      <motion.div
        variants={animateContainer}
        initial="hidden"
        animate="visible"
        className="lg:flex sticky  hidden items-center justify-between w-full px-20 pt-20 text-[#FFFFFF] font-serif text-xl"
      >
        <Image
          src={Logo}
          placeholder="blur"
          className=" h-[150px] w-[300px] "
        />
        <div className="flex items-center  w-[50%] gap-[50px] p-10">
          <div className="flex items-center w-full gap-[50px]  text-gray-300 ">
            <Link
              href="/"
              className="transition-all duration-75 hover:text-black "
            >
              Home
            </Link>
            <Link
              href="/Products"
              className="transition-all duration-75 hover:text-black"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="transition-all duration-75 hover:text-black"
            >
              About Us
            </Link>
          </div>
          <Link
            href="/contact"
            className="bg-[#FFFFFF] text-black py-2 px-5 rounded-2xl text-sm  transition-all duration-75 hover:bg-slate-300  "
          >
            Contact
          </Link>
        </div>
      </motion.div>
      {/*small ui*/}
      <motion.div
        variants={animateContainer}
        initial="hidden"
        animate="visible"
        className="lg:hidden sticky flex items-center justify-between w-full p-5 bg-white"
      >
        <PiList className="w-[40px] h-[40px]" onClick={() => setshow(true)} />
        <Image
          src={Logo}
          placeholder="blur"
          className=" h-[60px] w-[60px] p-1  bg-black  rounded-full"
        />
      </motion.div>
      {/*menu*/}
      {show && (
        <motion.div
          initial={{
            x: -200,
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: -200,
          }}
          transition={{
            type: easeInOut,
          }}
          className=" z-50 fixed top-0 bg-white h-svh w-full"
        >
          <div className="w-full">
            <RiCloseLargeFill
              className="m-2 h-[30px] w-[30px] float-right"
              onClick={() => setshow(false)}
            />
          </div>
          <div className="flex flex-col  items-center  w-full h-full gap-[50px] font-bold ">
            <Link
              href="/"
              className=" w-full border border-black text-center p-10 "
              onClick={() => setshow(false)}
            >
              Home
            </Link>
            <Link
              href="/Products"
              className="w-full border border-black text-center p-10"
              onClick={() => setshow(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="  w-full border border-black text-center p-10"
              onClick={() => setshow(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="border border-black text-center p-5 rounded-lg  bg-black text-white"
              onClick={() => setshow(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}

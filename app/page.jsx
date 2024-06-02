"use client";
import Image from "next/image";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function Home() {
  const animateContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };
  return (
    <motion.div
      variants={animateContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center gap-5  lg:h-fit h-full  w-full lg:p-20 text-white"
    >
      <h1 className="lg:text-8xl text-5xl tracking-widest">FLORISTERÍA</h1>
      <p>boutique florist | weddings & events</p>
    </motion.div>
  );
}

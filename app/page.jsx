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
    <main className="bg-[url('/back.jpg')] bg-cover bg-center bg-no-repeat h-full w-full select-none font-serif overflow-hidden">
      <div className=" bg-gradient-to-t from-black/50 to-white/10 w-full h-screen">
        <Header />
        <motion.div
          variants={animateContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-center gap-5 lg:h-fit h-screen  w-full lg:p-20 text-white"
        >
          <h1 className="lg:text-8xl text-5xl tracking-widest">FLORISTERÍA</h1>
          <p>boutique florist | weddings & events</p>
        </motion.div>
      </div>
    </main>
  );
}

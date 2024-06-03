"use client";
import { motion } from "framer-motion";
import React from "react";
export default function page() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className=" bg-black text-white text-center p-5 select-text"
    >
      Mail: samaalibassem123@gmail.com
      <br />
      Discord: .besbes
    </motion.div>
  );
}

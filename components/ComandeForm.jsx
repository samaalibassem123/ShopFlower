"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
export default function ComandeForm() {
  const AnimateInputs = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const [Qt, setqt] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl underline mt-2">Remplir La Formulaire:</h1>
      <motion.form
        onSubmit={(e) => e.preventDefault()}
        variants={AnimateInputs}
        initial="hidden"
        animate="visible"
        action=""
        className="flex flex-col gap-4"
      >
        <motion.input
          variants={AnimateInputs}
          type="text"
          placeholder="Name"
          className="border border-black outline-none w-full p-5 "
        />
        <motion.input
          variants={AnimateInputs}
          type="text"
          placeholder="Numero de Télephone"
          className="border border-black outline-none w-full p-5 "
        />
        <motion.input
          variants={AnimateInputs}
          type="text"
          placeholder="Adresse Mail"
          className="border border-black outline-none w-full p-5 "
        />
        <motion.div
          variants={AnimateInputs}
          className="w-full  flex items-center justify-between border border-gray-200"
        >
          <motion.button
            variants={AnimateInputs}
            className="border border-black p-5 w-[20%]  bg-black text-white text-2xl"
            onClick={() => {
              if (Qt > 0) {
                setqt(Qt - 1);
              }
            }}
          >
            -
          </motion.button>

          <motion.span className="text-3xl">{Qt}</motion.span>

          <motion.button
            variants={AnimateInputs}
            className="border border-black p-5 w-[20%] bg-black text-white text-2xl"
            onClick={() => setqt(Qt + 1)}
          >
            +
          </motion.button>
        </motion.div>
        <motion.input
          variants={AnimateInputs}
          type="submit"
          value="Commander"
          className=" text-lg font-bold  border border-black outline-none w-full p-4  hover:text-white hover:bg-black transition-all ease-in-out duration-100 cursor-pointer "
        />
      </motion.form>
    </div>
  );
}

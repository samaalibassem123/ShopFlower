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
  const [name, setName] = useState("");
  const [tel, setTe] = useState("");
  const [mail, setMail] = useState("");

  const [load, setload] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setload(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          mail: mail,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setload(false);
        alert("Command in ship you Will recive an email");
        e.target.reset();
      } else {
        alert("There is an erreur in ur mail try Again");
        setload(false);
      }
    } catch (err) {
      alert("There is an erreur in ur mail try Again", err);
      setload(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl underline mt-2">Remplir La Formulaire:</h1>
      <motion.form
        onSubmit={HandleSubmit}
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
          className={
            load
              ? "border border-black outline-none w-full p-5 cursor-wait"
              : "border border-black outline-none w-full p-5"
          }
          onChange={(e) => setName(e.target.value)}
          required
          disabled={load}
          name="name"
        />
        <motion.input
          variants={AnimateInputs}
          type="text"
          placeholder="Numero de Télephone"
          className={
            load
              ? "border border-black outline-none w-full p-5 cursor-wait"
              : "border border-black outline-none w-full p-5"
          }
          onChange={(e) => setTe(e.target.value)}
          required
          disabled={load}
        />
        <motion.input
          variants={AnimateInputs}
          type="text"
          placeholder="Adresse Mail"
          className={
            load
              ? "border border-black outline-none w-full p-5 cursor-wait"
              : "border border-black outline-none w-full p-5"
          }
          onChange={(e) => setMail(e.target.value)}
          required
          disabled={load}
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
          value={load ? "Loading..." : "Commander"}
          className=" text-lg font-bold  border border-black outline-none w-full p-4  hover:text-white hover:bg-black transition-all ease-in-out duration-100 cursor-pointer "
        />
      </motion.form>
    </div>
  );
}

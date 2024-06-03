"use client";
import React from "react";
import Cards from "@/components/Cards";
import { motion } from "framer-motion";
export default function page() {
  const animateContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={animateContainer}
      initial="hidden"
      animate="visible"
      className=" flex flex-wrap   items-center justify-center  w-full lg:h-[70%] h-[75%]  overflow-y-scroll scrollbar-thin scrollbar-webkit scroll-m-0"
    >
      <Cards
        source="beautiful-purple-iris-royalty-free-image-1709587245.jpeg"
        name="Iris barbue"
      />
      <Cards
        source="close-up-of-pink-flowering-plants-royalty-free-image-1709587708.jpeg"
        name="Dahlia"
      />
      <Cards
        source="mandevilla-flower-in-bloom-royalty-free-image-1585165592.jpeg"
        name="Mandevilla"
      />
      <Cards
        source="pink-clematis-blooming-in-garden-royalty-free-image-1709586277.jpeg"
        name="Perce-neige"
      />
      <Cards
        source="spring-snowdrops-galanthus-nivalis-royalty-free-image-1709587839.jpeg"
        name="Aconit d'hiver"
      />
      <Cards
        source="winterlinge-rautal-jena-germany-winter-aconite-royalty-free-image-1685718647.jpeg"
        name="Clématite"
      />
    </motion.div>
  );
}

import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <div className="loader">
      <IoFastFoodOutline />

      <div>
        <motion.p {...options} transition={{
            ease: "linear",
            repeat : Infinity,
            repeatType : 'reverse',
        }}>Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;
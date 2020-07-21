import React, { useState } from "react";
import { motion } from "framer-motion";

const states = {
  move: "move",
  empty: "empty",
};

const variants = {
  [states.move]: {
    rotate: "360deg",
    scale: [1.4, 1],
    transition: { type: "spring" },
  },
  [states.empty]: {
    rotate: "0deg",
    transition: { duration: 0 },
  },
};

const useAnimationHoverRotate = () => {
  const [animate, setAnimate] = useState(states.empty);

  const bindHover = {
    onHoverStart: () => setAnimate(states.move),
    onHoverEnd: () => setAnimate(states.empty),
  };

  const ContainerMotion = ({ children }) => <motion.div {...bindHover}>{children}</motion.div>;
  const AnimateMotion = ({ children }) => <motion.div animate={animate} variants={variants}> {children} </motion.div>;

  return {
      ContainerMotion,
      AnimateMotion,
  };
};

export default useAnimationHoverRotate;

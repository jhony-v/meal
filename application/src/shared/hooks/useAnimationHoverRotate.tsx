import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";

enum STATES_VARIANT {	MOVE = "MOVE",	STOP = "STOP"	}
type AnimateProps = { children : ReactNode }

const variants = {
  [STATES_VARIANT.MOVE]: {
    rotate: "360deg",
    scale: [1.4, 1],
    transition: { type: "spring" },
  },
  [STATES_VARIANT.STOP]: {
    rotate: "0deg",
    transition: { duration: 0 },
  },
};

const useAnimationHoverRotate = () => {
  const [animate, setAnimate] = useState<STATES_VARIANT>(STATES_VARIANT.STOP);
  const bindHover = {
    onHoverStart: () : void => setAnimate(STATES_VARIANT.MOVE),
    onHoverEnd: () : void => setAnimate(STATES_VARIANT.STOP),
	};
  const ContainerMotion = (props:AnimateProps) => <motion.div {...bindHover}>{props.children}</motion.div>;
  const AnimateMotion = (props:AnimateProps) => <motion.div animate={animate} variants={variants}> {props.children} </motion.div>;

  return {
      ContainerMotion,
      AnimateMotion,
  };
};

export default useAnimationHoverRotate;

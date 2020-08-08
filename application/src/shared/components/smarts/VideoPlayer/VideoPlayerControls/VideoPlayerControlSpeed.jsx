import React, { Fragment } from "react";
import { IoIosTimer } from "react-icons/io";
import { useVideoPlayerContext } from "../Providers/VideoPlayerProvider";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import useToggle from "shared/hooks/useToggle";

export default () => {
	const { onCurrentSpeed } = useVideoPlayerContext();
	const { open, onToggle } = useToggle();
	const onChange = (ev) => onCurrentSpeed(ev.target.value);
	return (
		<Fragment>
			<AnimatePresence>
				{open && <InnerInputRange {...propsInputRange} onChange={onChange} />}
			</AnimatePresence>
			<IoIosTimer color="white" size={20} onClick={onToggle} />
		</Fragment>
	);
};

// styled components
const InnerInputRange = styled(motion.input)`
	-webkit-appearance: none;
	background: rgba(255, 255, 255, 0.2);
	height: 2px;
	border-radius: 2px;
	margin: 0 1em;
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		background: white;
		width: 10px;
		height: 10px;
		border-radius: 100%;
		cursor: pointer;
	}
`;

// props input range
const propsInputRange = {
	type: "range",
	initial: "closed",
	animate: "opened",
	exit: "closed",
	min: 0,
	max: 2,
	step: 0.5,
	defaultValue: 1,
	variants: {
		closed: {
			width: 0,
		},
		opened: {
			width: "80px",
		},
	},
};

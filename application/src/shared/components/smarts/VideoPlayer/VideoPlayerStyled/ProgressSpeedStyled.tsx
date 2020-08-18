import styled from "@emotion/styled";
import { motion } from "framer-motion";

const InputRange = styled(motion.input)`
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

InputRange.defaultProps = {
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

export default {
	InputRange,
};

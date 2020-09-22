import styled from "themes/styled";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { motion } from "framer-motion";

export const FooterControls = styled.div`
	padding: 0.5em;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0.4);
`;

type UIVideoSimpleProps = {
	width?: string;
	height?: string;
	fullScreen?: boolean;
};
export const VideoStream = styled.video<UIVideoSimpleProps>`
	user-select: none;
	object-fit: cover;
	display: block;
	width: ${(props) => props.width || "100%"};
	height: ${(props) => (props.fullScreen ? "100%" : props.height || "180px")};
`;

export const VideoPlayerWrapper = styled(UIContainer)`
	overflow: hidden;
	border-radius: 10px;
	position: relative;
`;

export const VideoProgressScrollBarWrapper = styled.div`
	width: 100%;
	margin: 0 10px;
	height: 8px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 10px;
	position: relative;
`

type ScrollBarProps = {
	percentage?: number;
	absolute?: boolean;
	thumb?: boolean;
};
export const VideoProgressScrollBar = styled.div<ScrollBarProps>`
	height: 100%;
	transition: width 0.5s;
	border-radius: 10px;
	width: ${(props) => props.percentage}%;
	position: ${(props) => props.absolute && "absolute"};
	background-color: ${(props) => props.thumb ? "white" : "rgba(255,255,255,.2)"};
`;

export const InputRangeSpeed = styled(motion.input)`
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
InputRangeSpeed.defaultProps = {
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

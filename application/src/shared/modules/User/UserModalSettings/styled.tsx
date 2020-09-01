import { motion } from "framer-motion";
import styled from "themes/styled";
import { UIButton } from "shared/styled/UIButton.styled";

export const UserModalWrapper = styled(motion.div)`
	position: absolute;
	right: 0;
	width: 350px;
`;
UserModalWrapper.defaultProps = {
	initial: "close",
	animate: "open",
	exit: "close",
	variants: {
		close: {
			opacity: 0,
			x: 20,
		},
		open: {
			opacity: 1,
			x: 0,
		},
	},
};

export const UserModalSettingButtonWrapper = styled(UIButton)`
	margin: 5px 0;
	transition: background-color 0.2s;
	&:hover {
		background-color: ${(props) => props.theme.colors.neutralLight};
	}
`;
UserModalSettingButtonWrapper.defaultProps = {
	block: true,
};

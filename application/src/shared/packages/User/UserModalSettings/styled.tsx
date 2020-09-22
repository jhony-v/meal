import { motion } from "framer-motion";
import { UIButtonLink } from "shared/styled/StyledButtons/UIButton.styled";
import styled from "themes/styled";

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

export const UserModalSettingButtonWrapper = styled(UIButtonLink)`
	margin: 5px 0;
	display : block;
	&:hover {
		background-color: ${(props) => props.theme.colors.neutralLight};
	}
`;
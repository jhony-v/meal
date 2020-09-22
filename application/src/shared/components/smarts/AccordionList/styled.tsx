import styled from "themes/styled";
import { motion } from "framer-motion";

export const AccordionListMainWrapper = styled(motion.div)`
	border-radius: 15px;
	overflow: hidden;
`;

export const AccordionListItemWrapper = styled(motion.div)`
	background-color: ${(props) => props.theme.colors.neutralLightSmall};
	border-bottom: 2px solid ${(props) => props.theme.colors.primaryLight};
`;

export const AccordionListItemHeaderWrapper = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding: 15px;
	font-size: 13px;
	transition: background-color 0.3s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.02);
	}
`;

export const AccordionListItemBodyWrapper = styled(motion.div)``;
AccordionListItemBodyWrapper.defaultProps = {
	variants: {
		open: {
			opacity: 1,
			height: "auto",
			y: 0,
		},
		close: {
			opacity: 0,
			height: 0,
			y: 50,
		},
	},
};

export const AccordionListIconWrapper = styled.span<{ active: boolean }>`
	color: ${(props) => props.active ? props.theme.colors.primary : props.theme.colors.neutralLightMedium};
`;

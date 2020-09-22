import { motion } from "framer-motion";
import { UIContainerSpan } from "shared/styled/StyledWrappers/UIContainer.styled";
import { color, compose, variant } from "styled-system";
import styled from "themes/styled";

/**
 * Tooltip container global
 */
export const UIContainerAnimated = motion.custom(UIContainerSpan);

/**
 * Tooltip modal to show and hide
 */
export type UIToolTipAnimatedVariantProps = "default" | "light";
export const UIToolTipAnimated = styled(motion.div)`
	border-radius: 20px;
	padding: 10px;
	margin-top: 10px;
	position: absolute;
	font-size: ${({ theme }) => theme.fontSizes.small[0]};
	box-shadow: ${({ theme }) => theme.shadows.big};
	${compose(color)}
	${variant({
		variants: {
			default: {
				backgroundColor: "primaryDark",
				color: "primaryLight",
			},
			light: {
				backgroundColor: "primaryLight",
			},
		},
	})}
`;

UIToolTipAnimated.defaultProps = {
	variant: "default",
	transition: {
		type: "tween",
	},
	variants: {
		initial: {
			y: -30,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
		},
	},
	initial: "initial",
	animate: "animate",
	exit: "initial",
};

import styled from "themes/styled";
import {
	borderRadius,
	fontSize,
	border,
	margin,
	FontSizeProps,
	BorderProps,
	MarginProps,
	compose,
	BorderRadiusProps,
} from "styled-system";
import { UIAvatar } from "./UIAvatar.styled";

/**
 * Styled component chip
 */
type UIChipProps = BorderRadiusProps & FontSizeProps & BorderProps & MarginProps;
export const UIChip = styled.div<UIChipProps>`
	display: inline-flex;
	align-items: center;
	padding: 12px;
	background-color: ${(props) => props.theme.colors.primaryLight};
	${compose(borderRadius, fontSize, border, margin)};
`;
UIChip.defaultProps = {
	borderRadius: 30,
	fontSize: "normal.0",
	border: "avatar.outline",
};

/**
 *	Button to delete the chip
 */
export const UIChipCloseButton = styled(UIAvatar)`
	cursor: pointer;
	width: 24px;
	height: 24px;
`;
UIChipCloseButton.defaultProps = {
	bg: "neutralLight",
	color: "neutralLightMedium",
};

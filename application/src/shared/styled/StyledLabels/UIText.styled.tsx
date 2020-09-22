import styled from "themes/styled";
import { textAlign, color, fontSize, compose, variant } from "styled-system";
import { css } from "@emotion/core";
import { LabelTypes } from "./Label.types";

/**
 * Styled component text base
 */
export const UIText = styled.span<LabelTypes.UITextProps>`
	user-select: ${(props) => props.noSelect && "none"};
	font-weight: ${(props) => props.weight && "bold"};
	${(props) =>
		props.block &&
		css`
			display: block;
			width: 100%;
		`}
	${compose(textAlign, color, fontSize)};
`;
UIText.defaultProps = { fontSize: "normal.1" };

/**
 * Styled component text smooth
 */
export const UITextSmooth = styled(UIText)`
	color: ${({ theme }) => theme.colors?.neutralLightMedium};
`;
/**
 * Styled component text title semejant to h1
 */
export const UITextBoldLarge = styled(UIText)`
	font-size: ${(props) => props.theme.fontSizes.big[0]};
	font-weight: bold;
	${variant({
		variants: {
			dark: {
				color: "primaryDark",
			},
			primary: {
				color: "primary",
			},
		},
	})};
`;
UITextBoldLarge.defaultProps = { variant: "dark" };

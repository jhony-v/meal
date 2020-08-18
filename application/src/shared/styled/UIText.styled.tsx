import styled from "themes/styled";
import system, { textAlign, color, fontSize, compose } from "styled-system";
import { css } from "@emotion/core";
import { textVariantsBold } from "themes/themesVariants/texts.variants";

/**
 * Styled component text base
 */
type UITextProps = system.ColorStyleProps &
	system.FontSizeProps &
	system.TextAlignProps & {
		noSelect?: boolean;
		weight?: boolean;
		block?: boolean;
		sizeWidth?: string;
	};

export const UIText = styled.span<UITextProps>`
	user-select: ${(props) => props.noSelect && "none"};
	font-weight: ${(props) => props.weight && "bold"};
	${(props) =>
		props.block &&
		css`
			display: block;
			width: ${props.sizeWidth || "100%"};
		`}
	${compose(textAlign, color, fontSize)};
`;
UIText.defaultProps = { fontSize: "normal.1" };

/**
 * Styled component text smooth
 */
export const UITextSmooth = styled(UIText)`
	color : ${({theme}) => theme.colors.neutralLightMedium};
`
/**
 * Styled component text title semejant to h1
 */
export const UITextBoldLarge = styled(UIText)`
	font-size: ${(props) => props.theme.fontSizes.big[0]};
	font-weight: bold;
	${textVariantsBold};
`;
UITextBoldLarge.defaultProps = { variant: "dark" };

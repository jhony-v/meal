import styled from "@emotion/styled";
import system, {
	variant,
	textAlign,
	color,
	fontSize,
	compose,
} from "styled-system";
import { css } from "@emotion/core";

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
export const UITextSmooth = styled(UIText)(({ theme }: any) => ({
	color: theme.colors.neutralLightMedium,
}));

/**
 * Styled component text title semejant to h1
 */
export const UITextBoldLarge = styled(UIText)`
	font-size: ${(props: any) => props.theme.fontSizes.big[0]};
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
	})}
`;
UITextBoldLarge.defaultProps = { variant: "dark" };

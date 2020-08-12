import styled from "@emotion/styled";
import { variant, textAlign, color, fontSize } from "styled-system";

export const UIText = styled.span(
	({ theme, ...props }) => ({
		userSelect: props.noSelect && "none",
		fontWeight: props.weight && "bold",
		fontSize: (props.size ? theme.fontSize[props.size] : theme.fontSize.regular) + "rem",
		...(props.block && {
			display: "block",
			width: props.sizeWidth || "100%",
		}),
	}),
	textAlign,
	color,
	fontSize
);

export const UITextSmooth = styled(UIText)(({ theme }) => ({
	color: theme.colors.neutralLightMedium,
}));

export const UITextBoldLarge = styled(UIText)(
	({ theme }) => ({
		fontSize: theme.fontSize.big * 1.4 + "rem",
		fontWeight: "bold",
	}),
	variant({
		variants: {
			dark: {
				color: "primaryDark",
			},
			primary: {
				color: "primary",
			},
		},
	})
);
UITextBoldLarge.defaultProps = { variant: "dark" };

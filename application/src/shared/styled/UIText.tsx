import styled from "@emotion/styled";
import { variant, textAlign, color, fontSize } from "styled-system";

export const UIText = styled.span(
	({ theme, ...props }: any) => ({
		userSelect: props.noSelect && "none",
		fontWeight: props.weight && "bold",
		...(props.block && {
			display: "block",
			width: props.sizeWidth || "100%",
		}),
	}),
	textAlign,
	color,
	fontSize
);
UIText.defaultProps = { fontSize: "normal.1" };

export const UITextSmooth = styled(UIText)(({ theme }: any) => ({
	color: theme.colors.neutralLightMedium,
}));

export const UITextBoldLarge = styled(UIText)(
	({ theme }: any) => ({
		fontSize: theme.fontSizes.big[0],
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

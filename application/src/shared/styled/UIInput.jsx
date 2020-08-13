import styled from "@emotion/styled";
import { width, borderRadius, space, layout } from "styled-system";

export const UIInput = styled.input(
	(props) => ({
		padding: "15px",
		background: props.theme.colors.neutralLight,
	}),
	width,
	borderRadius
);
UIInput.defaultProps = { width: "100%", borderRadius: "25px" };

export const UIInputTextArea = styled.textarea(
	(props) => ({
		resize: "none",
		"&::-webkit-input-placeholder": {
			color: props.theme.colors.grayDark2,
		},
	}),
	space,
	layout
);
UIInputTextArea.defaultProps = { width: "100%" };

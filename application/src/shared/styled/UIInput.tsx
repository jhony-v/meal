import styled from "@emotion/styled";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";

export const UIInput = styled.input((props: any) => ({
	padding: "15px",
	borderRadius: "25px",
	width: "100%",
	background: props.theme.colors.neutralLight,
}));

type UIInputTextAreaProps = SpaceProps & LayoutProps;
export const UIInputTextArea = styled.textarea<UIInputTextAreaProps>(
	(props: any) => ({
		resize: "none",
		width: "100%",
		"&::-webkit-input-placeholder": {
			color: props.theme.colors.grayDark2,
		},
	}),
	space,
	layout
);

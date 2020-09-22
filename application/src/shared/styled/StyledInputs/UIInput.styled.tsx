import styled from "themes/styled";
import { space, layout, compose } from "styled-system";
import { InputTypes } from "./Input.types";

/**
 * Input Type global base
 */
export const UIInput = styled.input`
	padding: 15px;
	border-radius: 25px;
	width: 100%;
	background: ${(props) => props.theme.colors?.neutralLight};
`;

/**
 * Textarea component
 */
export const UIInputTextArea = styled.textarea<InputTypes.UIInputTextAreaProps>`
	resize: none;
	width: 100%;
	&::-webkit-input-placeholder {
		color: ${(props) => props.theme.colors?.neutralLightMedium};
	}
	${compose(space, layout)};
`;

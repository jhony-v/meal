import styled from "themes/styled";
import { space, layout, SpaceProps, LayoutProps, compose } from "styled-system";

/**
 * Input Type global base
 */
export const UIInput = styled.input`
	padding: 15px;
	border-radius: 25px;
	width: 100%;
	background: ${(props) => props.theme.colors.neutralLight};
`;

/**
 * Textarea component
 */
type UIInputTextAreaProps = SpaceProps & LayoutProps;
export const UIInputTextArea = styled.textarea<UIInputTextAreaProps>`
	resize: none;
	width: 100%;
	&::-webkit-input-placeholder {
		color: ${(props) => props.theme.colors.grayDark2};
	}
	${compose(space, layout)};
`;

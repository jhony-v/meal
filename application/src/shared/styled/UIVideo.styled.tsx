import styled from "@emotion/styled";

/**
 * Video component
 */
type UIVideoSimpleProps = {
	width?: string;
	height?: string;
	fullScreen?: boolean;
};
export const UIVideoSimple = styled.video<UIVideoSimpleProps>`
	user-select: none;
	object-fit: cover;
	display: block;
	width: ${(props) => props.width || "100%"};
	height: ${(props) => (props.fullScreen ? "100%" : props.height || "180px")};
`;

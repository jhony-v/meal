import styled from "@emotion/styled";
import { keyframeRotateAnimation } from "./styledUtils/keyframes";
import { computePositionAbsolute } from "./styledUtils/css";
import { css } from "@emotion/core";

/**
 * Loading spinner global
 */
export const UILoading = styled.div(({ theme }: any) => css`
		border-radius: 100%;
		margin: auto;
		width: 40px;
		height: 40px;
		border: 3px solid ${theme.colors.neutralLight};
		border-left-color: ${theme.colors.primary};
		animation: ${keyframeRotateAnimation} 0.5s infinite linear;
`);

/**
 * Loading spinner in fullscreen
 */
export const UILoadingPage = styled(UILoading)`
	position: fixed;
	margin: auto;
	${computePositionAbsolute()};
`;

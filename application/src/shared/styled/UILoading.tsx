import styled from "@emotion/styled";
import { keyframeRotateAnimation } from "./styledUtils/keyframes";
import { computePositionAbsolute } from "./styledUtils/positions";

export const UILoading = styled.div(({ theme }: any) => ({
	borderRadius: "100%",
	margin: "auto",
	width: "40px",
	height: "40px",
	border: `3px solid ${theme.colors.neutralLight}`,
	borderLeftColor: theme.colors.primary,
	animation: `${keyframeRotateAnimation} .5s infinite linear`,
}));

export const UILoadingPage = styled(UILoading)({
	position: "fixed",
	margin: "auto",
	...computePositionAbsolute(),
});

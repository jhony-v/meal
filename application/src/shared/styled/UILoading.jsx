import styled from "@emotion/styled";
import { keyframeRotateAnimation } from "./styledUtils/keyframes";
import { computePositionAbsolute } from "./styledUtils/positions";
import { size } from "styled-system";

export const UILoading = styled.div(
	({ theme }) => ({
		borderRadius: "100%",
		margin: "auto",
		border: `3px solid ${theme.colors.grayLight1}`,
		animation: `${keyframeRotateAnimation} .5s infinite linear`,
		borderLeftColor: theme.colors.primary,
	}),
	size
);
UILoading.defaultProps = { size: "40px" };

export const UILoadingPage = styled(UILoading)({
	position: "fixed",
	margin: "auto",
	...computePositionAbsolute(),
});

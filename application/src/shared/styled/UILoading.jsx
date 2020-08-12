import styled from "@emotion/styled";
import { keyframeRotateAnimation } from "./styledUtils/keyframes";
import { computePositionAbsolute } from "./styledUtils/positions";
import { size } from "styled-system";

export const UILoading = styled.div(
	({ theme }) => ({
		borderRadius: "100%",
		margin: "auto",
		border: `3px solid ${theme.colors.neutralLight}`,
		borderLeftColor: theme.colors.primary,
		animation: `${keyframeRotateAnimation} .5s infinite linear`,
	}),
	size
);
UILoading.defaultProps = { size: "40px" };

export const UILoadingPage = styled(UILoading)({
	position: "fixed",
	margin: "auto",
	...computePositionAbsolute(),
});

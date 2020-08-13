import styled from "@emotion/styled";
import { borderRadius, fontSize, border, margin } from "styled-system";
import { size } from "styled-system";
import { UIAvatar } from "./UIAvatar";

export const UIChip = styled.div(
	({ theme }) => ({
		display: "inline-flex",
		alignItems: "center",
		padding: "12px",
		backgroundColor: theme.colors.primaryLight,
	}),
	borderRadius,
	fontSize,
	border,
	margin
);
UIChip.defaultProps = {
	borderRadius: 30,
	fontSize: "normal.0",
	border: "avatar.outline",
};

export const UIChipCloseButton = styled(UIAvatar)(
	{
		cursor: "pointer",
	},
	size
);
UIChipCloseButton.defaultProps = {
	size: 24,
	bg: "neutralLight",
	color: "neutralLightMedium",
};

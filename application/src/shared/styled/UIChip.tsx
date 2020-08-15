import styled from "@emotion/styled";
import system, { borderRadius, fontSize, border, margin } from "styled-system";
import { UIAvatar } from "./UIAvatar";

type UIChipProps = system.BorderRadiusProps &
	system.FontSizeProps &
	system.BorderProps &
	system.MarginProps;

export const UIChip = styled.div<UIChipProps>(
	({ theme }: any) => ({
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

export const UIChipCloseButton = styled(UIAvatar)({
	cursor: "pointer",
	width: "24px",
	height: "24px",
});
UIChipCloseButton.defaultProps = {
	size: 24,
	bg: "neutralLight",
	color: "neutralLightMedium",
};

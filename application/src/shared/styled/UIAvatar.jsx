import styled from "@emotion/styled";
import { layout, color, background, borderRadius } from "styled-system";

export const UIAvatarImage = styled.img(
	{
		userDrag: "none",
	},
	layout,
	borderRadius
);
UIAvatarImage.defaultProps = { size: "40px", borderRadius: "100%" };

export const UIAvatar = styled.div(
	{
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	layout,
	color,
	background,
	borderRadius
);
UIAvatar.defaultProps = { borderRadius: "100%" };

export const UIAvatarFeaturedPrimary = styled(UIAvatar)((props) => ({
	padding: "4px",
	boxSizing: "content-box",
	border: `2px solid ${props.theme.colors.primary}`,
}));

export const UIAvatarFeaturedOutlined = styled(UIAvatar)((props) => ({
	border: `1px solid ${props.theme.colors.grayDarkBorder}`,
}));

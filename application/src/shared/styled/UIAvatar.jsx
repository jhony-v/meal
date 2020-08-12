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

export const UIAvatarFeaturedPrimary = styled(UIAvatar)({
	padding: "4px",
	boxSizing: "content-box",
});
UIAvatarFeaturedPrimary.defaultProps = { border: "avatar.featured" };

export const UIAvatarFeaturedOutlined = styled(UIAvatar)({});
UIAvatarFeaturedOutlined.defaultProps = { border: "avatar.outline" };

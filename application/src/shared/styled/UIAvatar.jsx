import styled from "@emotion/styled";
import { layout, color, background, borderRadius ,  width , height, borders, margin } from "styled-system";

export const UIAvatarImage = styled.img(
	{
		userDrag: "none",
		borderRadius : "100%",
	},
	layout,
	width,
	height,
	borderRadius,
	margin
);
UIAvatarImage.defaultProps = { size: "40px" };

export const UIAvatar = styled.div(
	{
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius : "100%",
	},
	layout,
	color,
	background,
	borderRadius,
);
UIAvatar.defaultProps = { size : "40px" };
	
export const UIAvatarFeaturedPrimary = styled(UIAvatar)(
	{
		padding: "4px",
		boxSizing: "content-box",
	},
	borders,
);
UIAvatarFeaturedPrimary.defaultProps = { border: "avatar.featured", borderRadius : "100%" };

export const UIAvatarFeaturedOutlined = styled(UIAvatar)({},borders);
UIAvatarFeaturedOutlined.defaultProps = { border: "avatar.outline", borderRadius : "100%" };

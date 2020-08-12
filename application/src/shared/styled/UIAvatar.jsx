import styled from "@emotion/styled";
import { layout, color, background, borderRadius ,  width , height, borders } from "styled-system";

export const UIAvatarImage = styled.img(
	{
		userDrag: "none",
	},
	layout,
	width,
	height,
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
	borderRadius,
);
UIAvatar.defaultProps = { borderRadius: "100%" };
	
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

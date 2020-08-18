import styled from "@emotion/styled";
import { compose, layout, borderRadius, borders, LayoutProps, BorderRadiusProps, margin, color } from "styled-system";

/**
 * Styled component to define the self avatar circle into image
 */
type UIAvatarImageProps = {
		size?: string | number;
		width?: string | number;
		height?: string | number;
};
export const UIAvatarImage = styled.img<LayoutProps & BorderRadiusProps & UIAvatarImageProps>`
	-webkit-user-drag: none;
	border-radius: 100%;
	width: ${(props) => props.size || props.width || "40px"};
	height: ${(props) => props.size || props.height || "40px"};
	${compose(layout, margin, borderRadius)};
`;

/**
 * Avatar of type icons
 */
export const UIAvatar = styled.div<LayoutProps & BorderRadiusProps & any>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	${compose(layout, borderRadius,color)};
`;
UIAvatar.defaultProps = { size: 40 };

/**
 * Avatar with border primary color to encapsule all type avatars
 */
export const UIAvatarFeaturedPrimary = styled(UIAvatar)`
	padding: 4px;
	box-sizing: content-box;
	${compose(borders)};
`;
UIAvatarFeaturedPrimary.defaultProps = {
	border: "avatar.featured",
};

/**
 * avatar with borders of type smooth
 */
export const UIAvatarFeaturedOutlined = styled(UIAvatar)(borders);
UIAvatarFeaturedOutlined.defaultProps = {
	border: "avatar.outline",
};

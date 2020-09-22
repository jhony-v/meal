import { BorderRadiusProps, LayoutProps } from "styled-system";

export namespace UIAvatarTypes {
	export type UIAvatarImageProps = {
		size?: string | number;
		width?: string | number;
		height?: string | number;
	} & LayoutProps & BorderRadiusProps;

	export type UIAvatarProps = LayoutProps & BorderRadiusProps & any;
	
}

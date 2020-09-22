import { FlexBasisProps, FlexProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";

export namespace WrapperTypes {
	export type UIGridProps = GridProps;
	export type UIFlexContainerProps = FlexProps & SpaceProps & PositionProps & LayoutProps & any;
	export type UIContainerProps = LayoutProps & PositionProps & FlexBasisProps & SpaceProps & {
		isDrawer?: boolean;	
		heightToolbar?: string;
	} & any;
	export type UIContainerSpanProps = LayoutProps & SpaceProps & PositionProps;
	export type UIBackdropProps = {
		light: boolean;
	};	
}
import styled from "@emotion/styled";
import { LayoutProps, PositionProps, FlexBasisProps, SpaceProps, layout, position, flex, space, compose } from "styled-system";
import variables from "./styledConstants/variables";
import layoutContainerVariant from "themes/themesVariants/layouts.variants";

/**
 * 
 */
type UIContainerProps = LayoutProps & PositionProps & FlexBasisProps & SpaceProps & {
		isDrawer?: boolean;	
		heightToolbar?: string;
	} & any;
	
export const UIContainer = styled.div<UIContainerProps>`
	padding-top : ${props=>props.isDrawer && variables.heightToolbar};
	${layoutContainerVariant};
	${compose(
		layout,
		position,
		flex,
		space,
	)};
`
/**
 * 
 */
export const UIContainerLayoutFixed = styled(UIContainer)((props : UIContainerProps) => ({
	height: props.heightToolbar || variables.heightToolbar ,
}));

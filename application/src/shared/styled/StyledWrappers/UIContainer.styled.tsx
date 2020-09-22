import styled from "themes/styled";
import { layout, position, flex, space, compose, variant } from "styled-system";
import variables from "../styledConstants/variables";
import { WrapperTypes } from "./Wrappers.types";

/**
 * Container layout personalizable
 */
export const UIContainer = styled.div<WrapperTypes.UIContainerProps>`
	${compose(layout,position,flex,space)};
	${variant({
	prop: "variantColor",
	variants: {
		lightMedium: {
			backgroundColor: "neutralLightMedium",
		},
		light: {
			backgroundColor: "primaryLight",
		},
	},
})};
`

export const UIContainerSpan = styled.span<WrapperTypes.UIContainerSpanProps>`
	display:inline-block;
	${compose(layout,space,position)};
`

export const UIContainerLayoutDrawer = styled(UIContainer)`
	padding-top : ${(props : WrapperTypes.UIContainerProps) =>props.isDrawer && variables.heightToolbar};
`
/**
 * Container with fixed pool on the head
 */
export const UIContainerLayoutFixed = styled(UIContainer)((props : WrapperTypes.UIContainerProps) => ({
	height: props.heightToolbar || variables.heightToolbar ,
}));

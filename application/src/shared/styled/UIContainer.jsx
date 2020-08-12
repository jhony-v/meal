import styled from "@emotion/styled";
import { layout, position, flex, margin, variant, padding } from "styled-system";
import variables from "./styledConstants/variables";

export const UIContainer = styled.div(
	(props) => ({
		paddingTop: props.isMainContainerLayout && variables.heightToolbar,
	}),
	variant({
		prop: "variantColor",
		variants: {
			lightMedium: {
				backgroundColor: "neutralLightMedium",
			},
			light: {
				backgroundColor: "primaryLight",
			},
		},
	}),
	layout,
	position,
	flex,
	margin,
	padding
);

export const UIContainerLayoutFixed = styled(UIContainer)((props) => ({
	height: props.heightToolbar || variables.heightToolbar,
}));

import styled from "@emotion/styled";
import { layout, position, flex, margin, variant } from "styled-system";
import variables from "./styledConstants/variables";

export const UIContainer = styled.div(
	(props) => ({
		paddingTop: props.isMainContainerLayout && variables.heightToolbar,
	}),
	variant({
		prop: "variantColor",
		variants: {
			page: {
				backgroundColor: "grayDark1",
			},
			layout: {
				backgroundColor: "light",
			},
		},
	}),
	layout,
	position,
	flex,
	margin
);

export const UIContainerLayoutFixed = styled(UIContainer)((props) => ({
	height: props.heightToolbar || variables.heightToolbar,
}));

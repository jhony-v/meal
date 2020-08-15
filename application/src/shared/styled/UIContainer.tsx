import styled from "@emotion/styled";
import system, { variant } from "styled-system";
import variables from "./styledConstants/variables";

type UIContainerProps = system.LayoutProps &
	system.PositionProps &
	system.FlexBasisProps &
	system.MarginProps & {
		isMainContainerLayout?: string;
		heightToolbar?: string;
	};

export const UIContainer = styled.div<UIContainerProps>(
	(props : UIContainerProps) => ({
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
	system.layout,
	system.position,
	system.flex,
	system.margin,
	system.padding
);

export const UIContainerLayoutFixed = styled(UIContainer)((props : UIContainerProps) => ({
	height: props.heightToolbar || variables.heightToolbar ,
}));

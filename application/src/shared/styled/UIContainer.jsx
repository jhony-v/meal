import styled from "@emotion/styled";
import { propsThemeBackgroundContainer } from "./styledUtils/paints";
import { computeDrawerLayoutActive, computeHeightHeaderNavigator, computeMargin } from "./styledUtils/boxes";


export const UIContainer = styled.div`
	${computeMargin};
	${computeDrawerLayoutActive};
	background: ${propsThemeBackgroundContainer};
	position: ${(props) => props.position};
	width: ${(props) => props.sizeWidth || props.sizeWidth};
	height: ${(props) => props.sizeHeight};
	padding: ${(props) => props.padding};
	flex: ${(props) => props.flex};
	z-index: ${(props) => props.index};
	top: ${(props) => props.top};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
`;

export const UIContainerLayoutFixed = styled(UIContainer)`
	${computeHeightHeaderNavigator};
`
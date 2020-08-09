import styled from "@emotion/styled";
import { computePadding, computeMargin } from "./styledUtils/boxes";

export const UIFlexContainer = styled.div`
	display : flex;
	align-items: ${(props) => props.align};
	justify-content: ${(props) => props.justify};
	flex-direction: ${(props) => props.flexDir};
	flex: ${(props) => props.flex};
	width: ${(props) => props.sizeWidth};
	height: ${(props) => props.sizeHeight };
	${computeMargin};
	${computePadding};
`;

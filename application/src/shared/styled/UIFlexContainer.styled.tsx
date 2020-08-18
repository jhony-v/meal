import styled from "@emotion/styled";
import {
	compose,
	flexbox,
	layout,
	space,
	position,
	FlexProps,
	SpaceProps,
	PositionProps,
	LayoutProps,
} from "styled-system";

/**
 * Flex component 
 */
type UIFlexContainerProps = FlexProps & SpaceProps & PositionProps & LayoutProps & any;
export const UIFlexContainer = styled.div<UIFlexContainerProps>`
	display: flex;
	${compose(flexbox, layout, space, position)};
`;

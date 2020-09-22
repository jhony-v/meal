import styled from "themes/styled";
import { compose, flexbox, layout, space, position } from "styled-system";
import { WrapperTypes } from "./Wrappers.types";

/**
 * Flex component
 */
export const UIFlexContainer = styled.div<WrapperTypes.UIFlexContainerProps>`
	display: flex;
	${compose(flexbox, layout, space, position)};
`;

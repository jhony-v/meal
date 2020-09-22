import styled from "themes/styled";
import { grid, compose } from "styled-system";
import { WrapperTypes } from "./Wrappers.types";

/**
 * Styled component grid
 */
export const UIGrid = styled.div<WrapperTypes.UIGridProps>`
	display: grid;
	${compose(grid)};
`;

export const UIGridItem = styled.div<WrapperTypes.UIGridProps>(grid);

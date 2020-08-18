import styled from "themes/styled";
import { grid, GridProps, compose } from "styled-system";

/**
 * Styled component grid
 */
type UIGridProps = GridProps;
export const UIGrid = styled.div<UIGridProps>`
	display: grid;
	${compose(grid)};
`;

export const UIGridItem = styled.div<UIGridProps>(grid);

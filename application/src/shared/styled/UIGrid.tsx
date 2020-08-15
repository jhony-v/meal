import styled from "@emotion/styled";
import { grid, GridProps } from "styled-system";

type UIGridProps = GridProps;

export const UIGrid = styled.div<UIGridProps>(
	{
		display: "grid",
	},
	grid
);

export const UIGridItem = styled.div<UIGridProps>(grid);

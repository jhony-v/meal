import styled from "@emotion/styled";
import { grid } from "styled-system";

//   ${computeGridRepeatTemplateColumns};
export const UIGrid = styled.div(
	{
		display: "flex",
	},
	{
		grid,
	}
);

export const UIGridItem = styled.div(grid);

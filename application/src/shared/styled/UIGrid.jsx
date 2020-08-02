import styled from "@emotion/styled";
import { computeGridRepeatTemplateColumns } from "./styledUtils/boxes";


export const UIGrid = styled.div`
  display: grid;
  ${computeGridRepeatTemplateColumns};
  gap: ${(props) => props.gap && props.gap};
`;

export const UIGridItem = styled.div`
  grid-column: ${(props) => props.gridColumn && props.gridColumn};
  grid-row: ${(props) => props.gridRow && props.gridRow};
`;

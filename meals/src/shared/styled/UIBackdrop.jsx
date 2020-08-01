import styled from "@emotion/styled";
import { computePositionAbsolute } from "./styledUtils/positions";

export const UIBackdrop = styled.div`
  position: absolute;
  ${computePositionAbsolute};
  background: rgba(0, 0, 0, ${(props) => props.opacity || 0.5});
`;

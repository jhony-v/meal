import styled from "@emotion/styled";
import { keyframeRotateAnimation } from "./styledUtils/keyframes";
import { computePositionAbsolute } from "./styledUtils/positions";

export const UILoading = styled.div`
    border-radius:100%;
    margin:auto;
    width:${(props) => props.sizeLoading || 40}px;
    height:${(props) => props.sizeLoading || 40}px;
    border:3px solid ${(props) => props.theme.colors.grayLight1};
    border-left-color: ${(props) => props.theme.colors.primary};
    animation: ${keyframeRotateAnimation} .5s infinite linear;
`;

export const UILoadingPage = styled(UILoading)`
  position: fixed;
  margin: auto;
  ${computePositionAbsolute};
`;

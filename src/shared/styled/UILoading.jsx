import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const rotateAnimation = keyframes`
    from {
        transform : rotate(-360deg);
    }
`;

export const UILoading = styled.div`
    border-radius:100%;
    margin:auto;
    width:${(props) => props.sizeLoading || 40}px;
    height:${(props) => props.sizeLoading || 40}px;
    border:3px solid ${(props) => props.theme.colors.grayLight1};
    border-left-color: ${(props) => props.theme.colors.primary};
    animation ${rotateAnimation} .5s infinite linear;
`;

export const UILoadingPage = styled(UILoading)`
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

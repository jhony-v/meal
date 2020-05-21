import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";


const rotateAnimation = keyframes`
    from {
        transform : rotate(-360deg);
    }
`

export const UILoading = styled.div`
    border-radius:100%;
    margin:auto;
    animation ${rotateAnimation} .6s infinite linear;
    width:${props => props.sizeLoading || 30}px;
    height:${props => props.sizeLoading || 30}px;
    border:3px solid ${props => props.theme.colors.grayLight1};
    border-left-color: ${props => props.theme.colors.primary};
`
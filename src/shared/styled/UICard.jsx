import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const UICard = styled.div`
    border-radius:10px;
    background : ${props => props.theme.colors.light};
    padding : 10px;
    box-shadow : ${props => props.shadow || "0 10px 10px rgba(0,0,0,.01)"}; 
    margin : ${props => props.margin || "0 auto"};
    }
`
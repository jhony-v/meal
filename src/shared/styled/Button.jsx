import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Text from "./Text";


//base button theme
const Button = styled.button`
    border-radius : 5px;
    padding:10px 20px;
    transition : opacity .1s;
    font-size: ${props => props.theme.fontSize.regular};
    &:hover {
        opacity : 0.8;
    }
`

export const ButtonHoverPrimary = styled(Button)`
    &:hover {
        background : ${props => props.theme.colors.primary};
        > * {
            color : ${props => props.theme.colors.light};
        }
    }
`

export default Button;
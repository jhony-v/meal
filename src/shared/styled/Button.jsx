import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Text from "./Text";

//theme button primary the background
const buttonTheme = (props, typeTheme) => {
    const theme = ({ primaryText, primaryBackground }) => css(`
        color : ${primaryText};
        background : ${primaryBackground};
    `);
    return theme(props.theme[typeTheme]);
}


//base button theme
const Button = styled.button`
    border-radius : 5px;
    padding:10px 20px;
    transition : opacity .1s;
    font-size: ${props=>props.theme.fontSize.regular};
    ${props => (
        props.variant ? buttonTheme(props, 'colors') : buttonTheme(props, 'secondaryColors')
    )}
    &:hover {
        opacity : 0.8;
    }
`

export const ButtonHoverPrimary = styled(Button)`
    &:hover {
        background : ${props=>props.theme.colors.primaryBackground};
        > * {
            color : ${props=>props.theme.colors.primaryText};
        }
    }
`

export default Button;
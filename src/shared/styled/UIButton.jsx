import styled from "@emotion/styled";
import { css } from "@emotion/core";

const backgroundButton = (props) => {
    return (props.variant === "primary") ?
        css(`
            background:${props.theme.colors.primary};
            color:${props.theme.colors.light};`
        )
        :
        css(`
            background:${props.theme.colors.grayLight1};
            color:${props.theme.colors.grayDark3};
        `)
}

//base button theme
export const UIButton = styled.button`
    border-radius : 5px;
    padding:10px 20px;
    transition : opacity .1s;
    font-size: ${props => props.theme.fontSize.regular};
    width:${props => props.sizeWidth && props.sizeWidth};
    ${backgroundButton}
    &:hover {
        opacity : 0.8;
    }
`

export const UIButtonHoverPrimary = styled(UIButton)`
`
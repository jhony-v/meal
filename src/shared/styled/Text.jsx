import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Text = styled.div`
    user-select : ${props => props.noSelect && 'none'};
    font-weight : ${props => props.weight && 'bold'};
    color : ${props => props.variant == "light" ? (
        props.theme.colors.light
    ) : (
            props.theme.colors.grayDark3
        )};
    ${props => props.size ?
        css(`
            font-size:${props.theme.fontSize[props.size]}rem;
        `) :
        css(`
            font-size : ${props.theme.fontSize.regular}rem;
        `)
    }
`

export default Text;
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Text = styled.div`
    user-select : ${props => props.noSelect && 'none'};
    font-weight : ${props => props.weight && 'bold'};
    color : ${props => props.color ? props.color : props.theme.secondaryColors.primaryText};
    ${props => props.size ?
        css(`
            font-size:${props.size}rem;
        `) :
        css(`
            font-size : ${props => props.theme.fontSize.regular};
        `)
    }
`

export default Text;
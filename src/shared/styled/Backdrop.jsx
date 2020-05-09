import styled from "@emotion/styled";
import { lighten } from "polished";

const Backdrop = styled.div`
    position : absolute;
    top : 0;
    bottom : 0;
    left : 0;
    right : 0;
    background : ${props => lighten(
        props.opacity || 0.3,
        props.color || 'black'
    )};
`

export default Backdrop;
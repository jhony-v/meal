import styled from "@emotion/styled";

const Smooth = styled.div`
    font-size:${props => props.size && (props.size + 'rem')};
    color : ${props => props.theme.secondaryColors.primaryTextSmooth};
`

export default Smooth;
import styled from "@emotion/styled";

const FlexContainer = styled.div(
    {
        display: "flex",
    },
    props => ({
        alignItems: props.align && props.align,
        justifyContent: props.justify && props.justify,
        flexDirection: props.direction && props.direction,
    })
)

export default FlexContainer;
import styled from "@emotion/styled";

const FlexContainer = styled.div(
    {
        display: "flex",
    },
    props => ({
        alignItems: props.align && props.align,
        justifyContent: props.justify && props.justify,
        flexDirection: props.flexDir && props.flexDir,
        flex: props.flex && pros.flex,
        width: props.sizeWidth && props.sizeWidth,
        height: props.sizeHeight && props.sizeHeight
    })
)

export default FlexContainer;
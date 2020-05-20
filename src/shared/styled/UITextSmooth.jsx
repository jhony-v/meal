import styled from "@emotion/styled";

const UITextSmooth = styled.div`
    font-size:${props => (
        props.size ?
            (props.theme.fontSize[props.size] + "rem") :
            (props.theme.fontSize.regular + "rem")
    )};
    color: ${ props => props.theme.colors.grayDark2};
`

export default UITextSmooth;
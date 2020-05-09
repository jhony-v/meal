import styled from "@emotion/styled";
import { css } from "@emotion/core";

// theme container
const themeBackgroundContainer = props => {
    const {
        theme: {
            colors,
        },
        variantColor
    } = props;
    switch (variantColor) {
        case "page":
            return colors.primaryPageBackground;
        case "layout":
            return colors.primaryLayoutBackground;
        default:
            return null;
    }
}

const Container = styled.div`
    width : ${props => props.sizeWidth || props.sizeWidth};
    height : ${props => props.sizeHeight && props.sizeHeight};
    background : ${themeBackgroundContainer};
    padding : ${props => props.padding && props.padding};
    margin : ${props => props.margin && props.margin};
    flex : ${props => props.flex && props.flex};
`

export default Container;
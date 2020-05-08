import styled from "@emotion/styled";

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
    width : 100%;
    background : ${themeBackgroundContainer}
    `
export default Container;
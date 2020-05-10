import styled from "@emotion/styled";

const defaultBorderRadius = "100%";
const sizeAvatar = props => {
    return props.size ? props.size : 40
}

const Avatar = styled.div`
    width : ${sizeAvatar}px;
    height : ${sizeAvatar}px;
    display: flex;
    align-items : center;
    justify-content : center;
    border-radius : ${props => props.radius || defaultBorderRadius};
    background:${props => (
        props.variant === "primary" ?
            props.theme.colors.primaryBackground :
            props.theme.secondaryColors.primaryBackground
    )};
    color : ${props => props.color};
    & > img {
        width : ${sizeAvatar}px;
        height : ${sizeAvatar}px;
        border-radius:${props => props.radius || defaultBorderRadius};
    }
`;

export default Avatar;
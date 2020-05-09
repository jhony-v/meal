import styled from "@emotion/styled";

const sizeAvatar = props => {
    return props.size ? props.size : 40
}

const Avatar = styled.div`
    width : ${sizeAvatar}px;
    height : ${sizeAvatar}px;
    border-radius : 100%;
    display: flex;
    align-items : center;
    justify-content : center;
    background:${props => (
        props.variant === "primary" ?
            props.theme.colors.primaryBackground :
            props.theme.secondaryColors.primaryBackground
    )};
    color : ${props => props.color};
    & > img {
        width : ${sizeAvatar}px;
        height : ${sizeAvatar}px;
        border-radius:100%;
    }
`;

export default Avatar;
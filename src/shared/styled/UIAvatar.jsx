import styled from "@emotion/styled";

const defaultBorderRadius = "100%";
const sizeAvatar = props => {
    return props.sizeAvatar ? props.sizeAvatar : 40
}

export const UIAvatar = styled.div`
    width : ${sizeAvatar}px;
    height : ${sizeAvatar}px;
    display: flex;
    align-items : center;
    justify-content : center;
    border-radius : ${props => props.radius || defaultBorderRadius};
    background:${props => (
        props.variant === "primary" ?
            props.theme.colors.primary :
            props.theme.colors.grayLight1
    )};
    color : ${props => props.color};
    & > img {
        width : ${sizeAvatar}px;
        height : ${sizeAvatar}px;
        border-radius:${props => props.radius || defaultBorderRadius};
        -webkit-user-drag:none;
    }
`;

export const UIAvatarFeaturedPrimary = styled.span`
    border: 2px solid ${props => props.theme.colors.primary};
    padding: 5px;
    border-radius:100%;
`
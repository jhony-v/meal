import styled from "@emotion/styled";

const sizeAvatar = props => {
    return props.size ? props.size : 40
}

const Avatar = styled.div`
    width : ${sizeAvatar}px;
    height : ${sizeAvatar}px;
    border-radius:100%;
    background:${props => props.theme.secondaryColors.primaryBackground};
`;

export default Avatar;
import styled from "@emotion/styled";

const sizeAvatar = props => {
    return props.size ? props.size : 40
}

const Avatar = styled.div`
    width : ${sizeAvatar}px;
    height : ${sizeAvatar}px;
    border-radius : 100%;
    display: flex;
    align-items : stretch;
    justify-content : center;
    background:${props => props.theme.secondaryColors.primaryBackground};
    & > img {
        width : 100%;
        border-radius:100%;
    }
`;

export default Avatar;
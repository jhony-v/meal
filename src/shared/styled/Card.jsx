import styled from "@emotion/styled";

const Card = styled.div`
    border-radius:10px;
    background : ${props => props.theme.colors.light};
    padding : 10px;
    box-shadow : 0 10px 10px rgba(0,0,0,.01); 
    margin : ${props => props.margin || "0 auto"};
`

export default Card;
import styled from "@emotion/styled";

const Card = styled.div`
    border-radius:20px;
    background : ${props => props.theme.colors.primaryLayoutBackground};
    padding : 10px;
    box-shadow : 0 10px 10px rgba(0,0,0,.02); 
    margin : ${props => props.margin || "0 auto"};
`

export default Card;
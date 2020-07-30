import styled from "@emotion/styled";

export const UICard = styled.div`
  border-radius: 10px;
  padding: 10px;
  background: ${(props) => props.theme.colors.light};
  box-shadow: ${(props) => props.shadow || "0 10px 10px rgba(0,0,0,.01)"};
  margin: ${(props) => props.margin || "0 auto"};
`;

export const UICardFlat = styled.div`
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border && `1px solid ${props.theme.colors.grayLight1}`};
`;

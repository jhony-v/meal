import styled from "@emotion/styled";

export const UIInput = styled.input`
  padding: 10px;
  border-radius: ${(props) => props.borderRadius || "20px"};
  width: ${(props) => props.sizeWidth || "100%"};
  background: ${(props) => props.theme.colors.grayLight1};
`;

export const UIInputTextArea = styled.textarea`
  resize: none;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.sizeWidth || "100%"};
  &::-webkit-input-placeholder{
    color : ${props => props.theme.colors.grayDark2};
  }
`;

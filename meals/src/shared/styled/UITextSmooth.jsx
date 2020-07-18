import styled from "@emotion/styled";

export const UITextSmooth = styled.div`
  color: ${(props) => props.theme.colors.grayDark2};
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSize[props.size] + "rem"
      : props.theme.fontSize.regular + "rem"};
`;

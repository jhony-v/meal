import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const UIText = styled.span`
  user-select: ${(props) => props.noSelect && "none"};
  font-weight: ${(props) => props.weight && "bold"};
  text-align: ${(props) => props.textAlign && props.textAlign};
  color: ${(props) => props.variant === "light" && props.theme.colors[props.variant] };
  ${(props) =>
    props.size
      ? css(`
            font-size:${props.theme.fontSize[props.size]}rem;
        `)
      : css(`
            font-size : ${props.theme.fontSize.regular}rem;
        `)}
`;

export const UITextSmooth = styled.span`
  color: ${(props) => props.theme.colors.grayDark2};
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSize[props.size] + "rem"
      : props.theme.fontSize.regular + "rem"};
`;

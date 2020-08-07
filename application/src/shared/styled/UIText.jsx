import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { computeBlockElement } from "./styledUtils/boxes";

export const UIText = styled.span`
  text-align: ${(props) => props.textAlign && props.textAlign};
  user-select: ${(props) => props.noSelect && "none"};
  font-weight: ${(props) => props.weight && "bold"};
  color: ${(props) => props.theme.colors[props.variant] };
	${computeBlockElement};
  ${(props) =>
    props.size
      ? css(`
            font-size:${props.theme.fontSize[props.size]}rem;
        `)
      : css(`
            font-size : ${props.theme.fontSize.regular}rem;
        `)}
`;

export const UITextSmooth = styled(UIText)`
  color: ${(props) => props.theme.colors.grayDark1};
`;

export const UITextBoldLarge = styled(UIText)`
  font-size : ${props=> props.theme.fontSize.big*1.4}rem;
	font-weight: bold;
	color: ${props=> !props.variant ? props.theme.colors.dark :  props.theme.colors[props.variant]};
`;

import React from "react";
import styled from "@emotion/styled";
import { computeBackgroundThemeContainer } from "./styledUtils/paints";
import { computeBlockElement } from "./styledUtils/boxes";

//base button theme
export const UIButton = React.memo(styled.button`
  padding: 10px 20px;
  transition: opacity 0.1s;
  ${computeBlockElement};
  ${computeBackgroundThemeContainer};
  border-radius: ${(props) => props.borderRadius || "15px"};
  font-size: ${(props) => props.theme.fontSize.regular};
  width: ${(props) => props.sizeWidth && props.sizeWidth};
  &:hover {
    opacity: 0.8;
  }
`);

import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { propsThemeBackgroundContainer } from "./styledUtils/paints";


export const computeMargin = props => css`
  margin-left:${props.marginLeft};
  margin-right:${props.marginRight};
  margin-top:${props.marginTop};
  margin-bottom:${props.marginBottom};
  margin: ${props.margin};
`;


export const UIContainer = styled.div`
  ${computeMargin};
  background: ${propsThemeBackgroundContainer};
  position: ${(props) => props.position && props.position};
  width: ${(props) => props.sizeWidth || props.sizeWidth};
  height: ${(props) => props.sizeHeight && props.sizeHeight};
  padding: ${(props) => props.padding && props.padding};
  flex: ${(props) => props.flex && props.flex};
  z-index: ${(props) => props.index && props.index};
  top: ${(props) => props.top && props.top};
  bottom: ${(props) => props.bottom && props.bottom};
  left: ${(props) => props.left && props.left};
  right: ${(props) => props.right && props.right};
`;

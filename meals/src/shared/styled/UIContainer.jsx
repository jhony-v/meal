import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { css } from "@emotion/core";


export const computeMargin = props => css`
  margin-left:${props.marginLeft};
  margin-right:${props.marginRight};
  margin-top:${props.marginTop};
  margin-bottom:${props.marginBottom};
  margin: ${props.margin};
`;

// theme container
export const propsThemeBackgroundContainer = (props) => {
  const { colors } = props.theme;
  const { variantColor } = props;
  switch (variantColor) {
    case "page":
      return colors.grayDark1;
    case "layout":
      return colors.light;
    default:
      return null;
  }
};

export const UIContainer = motion.custom(styled.div`
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
  background: ${propsThemeBackgroundContainer};
  ${computeMargin}
`);

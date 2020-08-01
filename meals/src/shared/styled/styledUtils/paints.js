import { css } from "@emotion/core";

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

// theme element 
export const computeBackgroundThemeContainer = (props) => {
  let style = "";
  let colors = props.theme.colors;
  switch (props.variant) {
    case "primary":
      style = ` background:${colors.primary}; color:${colors.light};`;
      break;
    case "outline":
      style = `color: ${colors.primary}; border:1px solid currentColor; font-weight:bold;`;
      break;
    default:
      style = `background:${colors.grayLight1}; color:${colors.grayDark3};`;
      break;
  }
  return css(`${style}`);
};

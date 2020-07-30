import styled from "@emotion/styled";
import { css } from "@emotion/core";

// style of primary button
const computeBackgroundButton = (props) => {
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

const computeBlockButton = (props) => {
  return props.block && css(`display:block;width:100%;`);
};

//base button theme
export const UIButton = styled.button`
  padding: 10px 20px;
  transition: opacity 0.1s;
  border-radius: ${(props) => props.borderRadius || "15px"};
  font-size: ${(props) => props.theme.fontSize.regular};
  width: ${(props) => props.sizeWidth && props.sizeWidth};
  ${computeBackgroundButton}
  ${computeBlockButton}
  &:hover {
    opacity: 0.8;
  }
`;

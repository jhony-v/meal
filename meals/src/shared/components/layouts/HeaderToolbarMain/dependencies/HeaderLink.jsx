import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UITextSmooth } from "shared/styled/UITextSmooth";
import { UIText } from "shared/styled/UIText";
import { useTheme } from "emotion-theming";
import { Link } from "react-router-dom";
import { jsx } from "@emotion/core";
/**@jsx jsx*/

const HeaderLink = ({ to, icon: IconLink, children, selected, ...props }) => {
  let theme = useTheme();
  let selectedColor = selected && {
    css: { color: theme.colors.primary },
  };
  let selectedColorContainer = selected && {
    css: {
      background: "rgba(230,60,90,.08)",
      borderRadius: "20px",
      padding: "10px 20px",
    },
  };

  return (
    <Link to={to}>
      <UITextSmooth>
        <UIFlexContainer justify="center" {...selectedColorContainer}>
          <IconLink {...selectedColor} />
          <UIContainer margin="0 0 0 10px">
            <UIText size="small2" weight {...selectedColor}>
              {children}
            </UIText>
          </UIContainer>
        </UIFlexContainer>
      </UITextSmooth>
    </Link>
  );
};

export default HeaderLink;

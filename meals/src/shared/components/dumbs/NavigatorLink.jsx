import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import { useTheme } from "emotion-theming";
import { NavLink } from "react-router-dom";

const NavigatorLink = ({ to, icon: IconLink, children, ...props }) => {
  let theme = useTheme();
  let activeStyle = { color: theme.colors.primary };
  return (
    <NavLink to={to} activeStyle={activeStyle} {...props}>
      <UIFlexContainer justify="center">
        <IconLink />
        <UIContainer margin="0 0 0 10px">
          <UIText size="small1" weight>
            {children}
          </UIText>
        </UIContainer>
      </UIFlexContainer>
    </NavLink>
  );
};

export default NavigatorLink;

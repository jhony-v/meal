import React, { memo } from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import { useTheme } from "emotion-theming";
import { NavLink } from "react-router-dom";
import useAnimationHoverRotate from "shared/animations/useAnimationHoverRotate";

const NavigatorLink = ({ to, icon: IconLink, children, ...props }) => {
  const theme = useTheme();
  const hoverRotate = useAnimationHoverRotate();
  const activeStyle = { color: theme.colors.primary };
  
  return (
    <hoverRotate.ContainerMotion>
      <NavLink to={to} activeStyle={activeStyle} {...props}>
        <UIFlexContainer justify="center">
          <hoverRotate.AnimateMotion>
            <IconLink />
          </hoverRotate.AnimateMotion>
          <UIContainer margin="0 0 0 10px">
            <UIText size="small1" weight>
              {children}
            </UIText>
          </UIContainer>
        </UIFlexContainer>
      </NavLink>
    </hoverRotate.ContainerMotion>
  );
};

export default memo(NavigatorLink);

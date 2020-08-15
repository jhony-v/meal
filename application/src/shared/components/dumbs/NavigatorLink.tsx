import React, { memo, ReactNode, FC } from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import { useTheme } from "emotion-theming";
import { NavLink } from "react-router-dom";
import useAnimationHoverRotate from "shared/animations/useAnimationHoverRotate";

const NavigatorLink : FC<NavigatorLinkProps> = ({ to, icon: IconLink, children, ...props }) => {
  const theme = useTheme<any>();
  const hoverRotate = useAnimationHoverRotate();
  const activeStyle = { color: theme.colors.primary };
  
  return (
    <hoverRotate.ContainerMotion>
      <NavLink to={to} activeStyle={activeStyle} {...props}>
        <UIFlexContainer alignItems="center" justifyContent="center">
          <hoverRotate.AnimateMotion>
            <IconLink />
          </hoverRotate.AnimateMotion>
          <UIContainer ml="10px">
            <UIText fontSize="normal.2" weight >
              {children}
            </UIText>
          </UIContainer>
        </UIFlexContainer>
      </NavLink>
    </hoverRotate.ContainerMotion>
  );
};

type NavigatorLinkProps = {
	to : string;
	icon : Function;
	children : string | ReactNode
}

export default memo(NavigatorLink);
